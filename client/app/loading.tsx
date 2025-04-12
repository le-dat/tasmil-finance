'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
  fullScreen?: boolean;
}

const Loading = ({ className, fullScreen = true }: LoadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'flex items-center justify-center bg-background/80 backdrop-blur-sm',
        fullScreen ? 'h-screen w-full fixed inset-0' : 'h-full w-full',
        className
      )}
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        className="flex flex-col items-center space-y-4"
      >
        <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-gray-300 font-medium tracking-wide text-lg animate-shine"
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
