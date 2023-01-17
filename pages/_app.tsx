import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ChartContextProvider } from "../context/ChartsContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChartContextProvider>
      <Component {...pageProps} />
    </ChartContextProvider>
  );
}
