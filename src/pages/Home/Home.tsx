import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/common/Layout";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import ConvertCurrencyData from "../../core/interfaces/ConvertCurrencyData";
import s from "./home.module.scss";

const Home: React.FC = () => {
  const [input, setInput] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<number | null>(null);

  const handleClick = async () => {
    const [from, toCurrency] = input.split("in");
    const [amount, fromCurrency] = from.split(" ");

    try {
      setIsLoading(true);
      const data: ConvertCurrencyData = await convertCurrency({
        from: fromCurrency.trim(),
        to: toCurrency.trim(),
        amount: amount.trim(),
      });
      setResult(data.result);
    } catch (e) {
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Input
        state={input}
        setState={setInput}
        label=""
        placeholder="example: 15 usd in uah"
      />
      <Button label={"Convert"} onClick={handleClick} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.result}>
          <span>Result: {result}</span>
        </div>
      )}
    </Layout>
  );
};

export default Home;
function convertCurrency(arg0: {
  from: string;
  to: string;
  amount: string;
}): ConvertCurrencyData | PromiseLike<ConvertCurrencyData> {
  throw new Error("Function not implemented.");
}
