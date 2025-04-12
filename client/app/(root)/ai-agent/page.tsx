"use client";

import AIAgent from "@/components/ai-agents/page";
import Navbar from "@/components/Navbar";

const SwapPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col max-h-calc(100vh-80px) h-full overflow-y-auto">
        <AIAgent />
      </div>
    </>
  );
};

export default SwapPage;
