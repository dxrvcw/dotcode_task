import { useEffect, useRef, useState } from "react";
import { Transaction } from "../utils/types";
import { uid } from "../utils/utils";
import { closeWebSocket, createWebSocket } from "../utils/webSocketUtils";

interface TransactionOutput {
  addr: string;
  value: number;
}

const WS_URL = "wss://ws.blockchain.info/inv";

export function useBitcoinTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    return () => {
      stopSubscription();
    };
  }, []);

  const stopSubscription = () => {
    if (ws.current) {
      closeWebSocket(ws.current);
      ws.current = null;
    }
  };

  const startSubscription = () => {
    ws.current = createWebSocket(
      WS_URL,
      "unconfirmed_sub",
      handleMessage,
      (error) => {
        console.error("WebSocket error:", error);
      }
    );
  };

  const resetData = () => {
    setTransactions([]);
    setTotalAmount(0);
  };

  const handleMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);

    const fromAddress = data.x.inputs[0]?.prev_out.addr || "Unknown";
    const toAddresses = data.x.out as TransactionOutput[];

    const newTransactions = toAddresses
      .map((output) => ({
        id: uid(),
        from: fromAddress,
        to: output.addr,
        amount: output.value / 100000000, // Convert Satoshis to BTC
      }))
      .filter((transaction) => transaction.amount > 0);

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      ...newTransactions,
    ]);

    const newTransactionsAmount = newTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    setTotalAmount((prevTotal) => prevTotal + newTransactionsAmount);
  };

  return {
    transactions,
    totalAmount,
    startSubscription,
    stopSubscription,
    resetData,
  };
}
