"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "AI", href: "#ai" },
    { name: "Steps", href: "#steps" },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-sm border border-border rounded-full px-6 py-2">
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
            <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
