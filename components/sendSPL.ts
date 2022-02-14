import {
  PublicKey,
  Transaction,
  Connection,
  Keypair,
} from '@solana/web3.js';
import {
  TOKEN_PROGRAM_ID,
  Token,
} from '@solana/spl-token';
import {
  toast,
} from 'react-hot-toast';
import getWallet from './whichWallet';
import {
  connectWallet,
} from './wallet';

export const sendSPL = async (
  mint: string,
  toWallet: PublicKey,
  amount: number,
  decimals: number,
): Promise<string | undefined> => {
  const wallet = getWallet();
  const sender = await connectWallet();
  if (!sender) return undefined;
  // Construct wallet keypairs
  const fromWallet = Keypair.generate();
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  // Construct my token class
  const SPL_pubkey = new PublicKey(mint);
  const SPL_Token = new Token(
    connection,
    SPL_pubkey,
    TOKEN_PROGRAM_ID,
    fromWallet,
  );

  let fromTokenAccount;

  try {
    fromTokenAccount = await SPL_Token.getOrCreateAssociatedAccountInfo(sender);
    // Create associated token accounts for the recipient if they don't exist yet
  } catch (error: any) {
    toast.error(`${error.message} for SPL token of the sender`);
    return undefined;
  }

  const associatedDestinationTokenAddr = await Token.getAssociatedTokenAddress(
    SPL_Token.associatedProgramId,
    SPL_Token.programId,
    SPL_pubkey,
    toWallet,
  );

  const receiverAccount = await connection.getAccountInfo(associatedDestinationTokenAddr);

  const transaction = new Transaction();

  if (receiverAccount === null) {
    transaction.add(
      Token.createAssociatedTokenAccountInstruction(
        SPL_Token.associatedProgramId,
        SPL_Token.programId,
        SPL_pubkey,
        associatedDestinationTokenAddr,
        toWallet,
        wallet.publicKey,
      ),
    );
  }

  // Add token transfer instructions to transaction
  transaction.add(
    Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      associatedDestinationTokenAddr,
      sender,
      [],
      Number(amount) * 10 ** decimals,
    ),
  );

  let signedTransaction: any = null;
  const {
    blockhash,
  } = await connection.getRecentBlockhash();

  transaction.recentBlockhash = blockhash;
  transaction.feePayer = sender;

  if (wallet) {
    try {
      signedTransaction = await wallet.signTransaction(transaction);
    } catch (e: any) {
      return undefined;
    }
  } else return undefined;

  const txid = await connection.sendRawTransaction(signedTransaction.serialize())
    .catch((err) => {
      console.log(err);
    });
  if (!txid) {
    toast.error('Failed to send transaction');
    return undefined;
  }
  toast.promise(connection.confirmTransaction(txid), {
    loading: 'Confirming Transaction',
    success: 'Transaction Confirmed',
    error: 'Transaction Failed',
  });
  return txid;
};
