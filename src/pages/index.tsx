import TradingViewWidget from "@/components/Widget/TradingViewWidget";
import { useState } from "react";

export default function Home() {
  const [symbol] = useState("005930");
  const [resolution] = useState("D");

  return (
    <main>
      <TradingViewWidget symbol={symbol} resolution={resolution} />
    </main>
  );
}
