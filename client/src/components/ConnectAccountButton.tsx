"use client";

import React from "react";
import { client } from "@/lib/thirdweb-client";
import { PATHS } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { ConnectButton } from "thirdweb/react";

const ConnectAccountButton = () => {
  const router = useRouter();
  return (
    <ConnectButton
      client={client}
      onConnect={() => router.push(PATHS.aiAgent)}
      onDisconnect={() => router.push(PATHS.landingPage)}
    />
  );
};

export default ConnectAccountButton;
