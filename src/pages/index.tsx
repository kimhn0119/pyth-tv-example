import TradingViewWidget from "@/components/Widget/TradingViewWidget";
import { useState } from "react";

export default function Home() {
  const [symbol] = useState("AAPL");
  const [resolution] = useState("D");

  return (
    <main>
      <TradingViewWidget symbol={symbol} resolution={resolution} />
    </main>
  );
}
