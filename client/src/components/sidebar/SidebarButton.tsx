"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "../ui/button";

export interface SidebarItem extends ButtonProps {
  icon: React.ReactNode;
  label: string;
  link?: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarItem> = ({
  icon,
  label,
  link,
  onClick,
  isActive,
  disabled,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.2 }}
    onClick={disabled ? undefined : onClick}
    className={cn(
      "p-4 rounded-md flex items-center gap-2 relative cursor-pointer transition-all duration-300",
      "text-gray-500 dark:text-neutral-400 dark:hover:text-white"
    )}
    id={`${label}-${link}`}
  >
    {icon}
    {label}
    {isActive && (
      <motion.span
        layoutId="bubble"
        className="absolute rounded-lg z-[-1] inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
      />
    )}
  </motion.div>
);

export default SidebarButton;
