import Features from '@/components/landing-page/Features';
import Footer from '@/components/landing-page/Footer';
import Hero from '@/components/landing-page/Hero';
import StepMoving from '@/components/landing-page/StepMoving';
import IntroAi from '@/components/landing-page/IntroAi';
import Squares from '@/components/ui/squares-background';
import HeroScroll from '@/components/landing-page/HeroScroll';
import { cn } from '@/lib/utils';

export default function Home() {
  const WIDTH = 'w-full max-w-[var(--container-width)] mx-auto';

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-black to-purple-950">
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="#333"
        hoverFillColor="#222"
        className="h-screen"
      />

      <div className="absolute z-[2] top-0 left-1/2 -translate-x-1/2 transform ">
        <Hero />
      </div>

      <div className="absolute z-[1] top-0 left-1/2 -translate-x-1/2 transform mt-64">
        <HeroScroll />
      </div>

      <Features className={cn(WIDTH, 'mt-44')} />
      <IntroAi className={WIDTH} />
      <StepMoving className={WIDTH} />
      <Footer />
    </div>
  );
}
