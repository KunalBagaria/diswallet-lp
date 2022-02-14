import React from 'react';
import styles from '@/styles/Sign.module.scss';
import components from '@/styles/Components.module.scss';
import { Transaction } from '@/components/types';
import {
  sendMoney,
  connectWallet,
  getTokens,
} from '@/components/wallet';
import { sendSPL } from '@/components/sendSPL';
import { getTokenPrice } from '@/components/getTokenPrice';
import { PublicKey } from '@solana/web3.js';
import { toast } from 'react-hot-toast';
import { getServerURL } from '@/components/getServerURL';
import bigCheckIcon from '@/images/icons/big-check.svg';

const sendPayment = (txid: string | undefined, transaction: Transaction) => {
  if (!txid || !transaction.hash) return;
  fetch(`${getServerURL()}/transaction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      txid,
      hash: transaction.hash,
    }),
  });
};

export const SignTransaction = function SignTransaction({ transaction }: {
  transaction: Transaction,
}) {
  const [txid, setTxid] = React.useState<string | undefined>('');
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const pay = async () => {
    setDisabled(true);
    console.log(transaction);
    if (transaction.token === 'SOL') {
      const solanaPrice = transaction.sendInUSD ? await getTokenPrice('solana') : null;
      if (!solanaPrice && transaction.sendInUSD) {
        toast.error('We\'re having trouble fetching the price of Solana, please try again later.');
        return;
      }
      console.log(solanaPrice ? `Solana Price: ${solanaPrice}` : 'No Solana Price Available');
      const tokenAmount = transaction.sendInUSD
        ? transaction.amount / Number(solanaPrice) : transaction.amount;
      const transactionID = await sendMoney(transaction.to, tokenAmount);
      setTxid(transactionID);
      sendPayment(transactionID, transaction);
    } else {
      const buff = await connectWallet(true);
      const publicKey = buff.toString();
      const tokens = await getTokens(publicKey);
      const found = tokens.filter((token: any) => token.tokenSymbol === transaction.token)[0];
      if (!found) {
        toast.error('Sorry, you don\'t have that token in your wallet');
        return;
      }
      if (transaction.sendInUSD && !found.priceUsdt) { toast.error('Sorry, we don\'t have the price for that token, please try again with the actual token amount'); }
      const tokenAmount = transaction.sendInUSD
        ? transaction.amount / found.priceUsdt : transaction.amount;
      const tokenMint = found.tokenAddress;
      const { decimals } = found.tokenAmount;
      const transactionID = await sendSPL(
        tokenMint,
        new PublicKey(transaction.to),
        tokenAmount,
        decimals,
      );
      setTxid(transactionID);
      sendPayment(transactionID, transaction);
    }
  };

  if (txid) {
    console.log(`Transaction ID: ${txid}`);
  }

  return (
    <div className={styles.container}>
      {!txid && (
        <div
          className={components.fullWidthSpaceBetween}
          style={{ marginBottom: '4.2rem' }}
        >
          <p className={components.bigBoldText}>Sign Transaction</p>
          <p className={components.bigGreenText}>
            {transaction.sendInUSD ? '$' : ''}
            {`${transaction.amount} `}
            {transaction.sendInUSD ? ' in ' : ''}
            {transaction.token}
          </p>
        </div>
      )}

      {txid && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '4.2rem',
          }}
        >
          <img src={bigCheckIcon.src} alt="" />
          <p
            style={{ marginTop: '2.4rem' }}
            className={components.bigGreenText}
          >
            Transaction Signed
          </p>
        </div>
      )}

      <div
        className={components.fullWidthSpaceBetween}
        style={{ marginBottom: '4.2rem' }}
      >
        <p className={components.fancyGrayText}>Paying To</p>
        <p className={components.fancySemiBold}>
          {transaction.to.substring(0, 4)}
          ....
          {transaction.from.substring(40, 44)}
        </p>
      </div>
      {!txid && (
        <button
          className={components.fullWidthBtn}
          onClick={pay}
          disabled={disabled}
        >
          Sign Transaction
        </button>
      )}
      {txid && (
        <button
          className={components.fullWidthBtn}
          onClick={() => {
            window.open(
              `https://solscan.io/tx/${txid}?cluster=${window.location.host.includes('localhost') ? 'devnet' : 'mainnet-beta'}`,
              '_blank',
            );
          }}
        >
          See in Explorer
        </button>
      )}
    </div>
  );
};
