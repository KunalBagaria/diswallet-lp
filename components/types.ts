export interface Transaction {
  amount: number;
  from: string;
  hash: string;
  sendInUSD: boolean;
  to: string;
  token: string;
}
