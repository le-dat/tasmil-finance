"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import ConnectAccountButton from "./ConnectAccountButton";
interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const HEADER_HEIGHT = "h-[var(--header-height)] max-h-[var(--header-height)]";

  return (
    <AnimatePresence mode="wait">
      <div
        className={cn(
          HEADER_HEIGHT,
          "flex items-center justify-between gap-2 px-6 py-4 border-b border-border",
          className
        )}
      >
        <div></div>
        <ConnectAccountButton />
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
