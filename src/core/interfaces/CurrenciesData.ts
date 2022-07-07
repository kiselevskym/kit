export default interface CurrenciesData {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}
