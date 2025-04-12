import { Button } from '@/components/ui/button';
import { Droplets } from 'lucide-react';
import React from 'react';

const EarnPage = () => {
  return (
    <div className="h-full w-full p-6 flex items-center justify-center">
      <div className="w-full rounded-lg p-8 max-w-md bg-purple-950/50 border border-purple-500/20">
        <div className="flex flex-col items-center text-center space-y-4">
          <Droplets className="w-16 h-16 text-purple-400" />
          <h1 className="text-3xl font-bold text-white">Coming Soon</h1>
          <p className="text-gray-400">
            Our airdrop features are under development. Stay tuned for updates!
          </p>
          <Button
            variant="outline"
            className="mt-4 border-purple-500/20 text-purple-400 hover:bg-purple-500/20"
          >
            Get Notified
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EarnPage;
