'use client';

import { motion } from 'framer-motion';
import { Bot, ChartBar, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepMovingProps {
  className?: string;
}

export default function StepMoving({ className }: StepMovingProps) {
  return (
    <section className={cn('pt-48 pb-56 relative', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      <div className="container flex flex-col items-center mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="px-3 py-1 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
            How It Works
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl text-center md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-6"
        >
          Simple Steps to
          <br />
          Start Trading
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Wallet className="h-8 w-8" />,
              title: '1. Connect Wallet',
              description: 'Securely connect your Web3 wallet to start trading',
            },
            {
              icon: <Bot className="h-8 w-8" />,
              title: '2. Chat with AI',
              description: 'Interact naturally with our AI to execute trades and manage positions',
            },
            {
              icon: <ChartBar className="h-8 w-8" />,
              title: '3. Track Performance',
              description: 'Monitor your portfolio and get real-time insights',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-purple-900/50 to-purple-900/20 border border-purple-500/20 group hover:border-purple-500/40 transition-all"
            >
              <div className="absolute -top-4 left-6 bg-purple-600 rounded-full p-2 text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
