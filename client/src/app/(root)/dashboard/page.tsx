"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Bot, ChartBar, Wallet } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Total Value Locked",
      value: "$1.2M",
      change: "+12.5%",
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      title: "24h Volume",
      value: "$450K",
      change: "+8.2%",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Active Users",
      value: "1.2K",
      change: "+15.3%",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
          Dashboard Overview
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className={cn(
              "p-6 bg-black/20 backdrop-blur-sm border border-border",
              "hover:bg-black/30 transition-colors"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-sm text-gray-400">{stat.title}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-green-400 text-sm">{stat.change}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-black/20 backdrop-blur-sm border border-border">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Activity items would go here */}
          </div>
        </Card>

        <Card className="p-6 bg-black/20 backdrop-blur-sm border border-border">
          <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
          <div className="space-y-4">
            {/* Portfolio items would go here */}
          </div>
        </Card>
      </div>
    </div>
  );
}