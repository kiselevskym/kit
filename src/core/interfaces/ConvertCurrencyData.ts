export default interface ConvertCurrencyData {
  success: boolean;
  query: { amount: number; from: string; to: string };
  info: { rate: number };
  historical: boolean;
  date: string;
  result: number;
}
