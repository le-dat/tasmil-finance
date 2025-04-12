"use client";

import { motion } from "framer-motion";
import ConnectAccountButton from "../ConnectAccountButton";

const Hero = () => {
  return (
    <section className="pt-20 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="px-3 py-1 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
              AI-Powered DeFi Trading
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-6"
          >
            Your Intelligent DeFi
            <br />
            Trading Companion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8"
          >
            Experience seamless token swaps, liquidity management, and real-time market insights
            with our AI-powered DeFi chatbot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ConnectAccountButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
