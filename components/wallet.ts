import {
  Connection,
  Transaction,
  SystemProgram,
  PublicKey,
  Keypair,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import * as bip39 from 'bip39';
import * as ed25519 from 'ed25519-hd-key';
import toast from 'react-hot-toast';
import axios from 'axios';
import getWallet from './whichWallet';

export const getTokens = async (account: string) => {
  try {
    const request = await axios.get(`https://public-api.solscan.io/account/tokens?account=${account}`);
    return request.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const generateKeyPair = () => {
  const derivePath = "m/44'/501'/0'/0'";
  const generatedMnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(generatedMnemonic);
  const derivedSeed = ed25519.derivePath(derivePath, seed.toString('hex')).key;
  const keypair = Keypair.fromSeed(derivedSeed);
  return {
    publicKey: keypair.publicKey.toBase58(),
    privateKey: keypair.secretKey,
    generatedMnemonic,
  };
};

export const connectWallet = async (dontMessage?: boolean) => {
  const wallet = getWallet();
  if (wallet) {
    const response = await wallet.connect();
    if (!response || !response.publicKey) {
      toast.error('Failed to connect to wallet');
      return undefined;
    }
    if (!dontMessage) {
      toast.success('Connected to wallet');
    }
    return wallet.publicKey;
  }
  toast.error('No Solana wallets found');
  window.open('https://phantom.app/', '_blank');
  return undefined;
};

export const disconnectWallet = async () => {
  const wallet = getWallet();
  if (wallet) {
    await wallet.disconnect();
    toast.success('Disconnected from wallet');
  }
};

export const sendMoney = async (toPublicKeyString: string, amount: number) => {
  const to = new PublicKey(toPublicKeyString);
  const wallet = getWallet();
  const publicKey = await connectWallet();
  if (!publicKey) return undefined;
  const environment = window.location.hostname === 'localhost' ? 'devnet' : 'mainnet-beta';
  const network = `https://api.${environment}.solana.com`;
  const connection = new Connection(network);
  const transaction = new Transaction()
    .add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: to,
        lamports: Number(amount) * LAMPORTS_PER_SOL,
      }),
    );
  const {
    blockhash,
  } = await connection.getRecentBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;
  const signedTransaction = await wallet.signTransaction(transaction);
  try {
    const txid = await connection.sendRawTransaction(signedTransaction.serialize());
    if (!txid) throw new Error('txid is undefined');
    const verified = connection.confirmTransaction(txid);
    toast.promise(verified, {
      loading: 'Confirming Transaction, you can close this tab',
      success: 'Transaction Confirmed',
      error: 'Transaction Failed',
    });
    return txid;
  } catch (error) {
    console.error(error);
    toast.error('Failed to send transaction');
    return undefined;
  }
};

export const signMessage = async (message: string) => {
  const wallet = getWallet();
  const encodedMessage = new TextEncoder().encode(message);
  const signedMessage = await wallet.signMessage(encodedMessage, 'utf8');
  return signedMessage;
};

export const walletIsConnected = () => {
  const wallet = getWallet();
  return wallet.isConnected;
};
