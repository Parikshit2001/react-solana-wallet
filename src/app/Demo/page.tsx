"use client";
import React, { useEffect, useState } from "react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

function Demo() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  return (
    <div className="">
      <WalletMultiButton />
      <WalletDisconnectButton />
    </div>
  );
}

export default Demo;
