"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PATHS } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import {
  Award,
  Brain,
  ChevronLeft,
  ChevronRight,
  Gift,
  HelpCircle,
  Settings,
  Trophy,
  Users,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Logo from "../Logo";
import SidebarButton, { SidebarItem } from "./SidebarButton";

const SIDEBAR_ITEMS: SidebarItem[] = [
  { icon: <Brain className="mr-2" />, label: "Ai Agents", link: PATHS.aiAgent },
  { icon: <Gift className="mr-2" />, label: "Airdrop", link: PATHS.airdrop },
  { icon: <Users className="mr-2" />, label: "Referral", link: PATHS.referral },
  { icon: <Trophy className="mr-2" />, label: "Earn", link: PATHS.earn },
  { icon: <Award className="mr-2" />, label: "Portfolio", link: PATHS.portfolio },
];

const FOOTER_ITEMS: SidebarItem[] = [
  { icon: <Settings className="mr-2" />, label: "Settings", link: PATHS.settings },
  { icon: <HelpCircle className="mr-2" />, label: "Help & FAQ", link: PATHS.help },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const pathname = usePathname();

  const HEADER_HEIGHT = "h-[var(--header-height)] max-h-[var(--header-height)]";

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out relative",
        isSidebarOpen ? "w-64" : "w-0"
      )}
    >
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64",
          "bg-black/20",
          "border-r border-border",
          "transform transition-transform duration-300 ease-in-out",
          "flex flex-col",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Logo className={HEADER_HEIGHT} />

        <ScrollArea className="flex-1 px-3 pt-4 pb-6">
          <AnimatePresence mode="wait">
            <div className="flex flex-col gap-2">
              {SIDEBAR_ITEMS.map((item, index) => (
                <SidebarButton
                  key={`${index}-${item.link}`}
                  {...item}
                  onClick={() => router.push(item.link!)}
                  isActive={pathname.includes(item.link!)}
                />
              ))}
            </div>
          </AnimatePresence>
        </ScrollArea>

        <div className="p-4 border-t border-border space-y-2">
          {FOOTER_ITEMS.map((item, index) => (
            <SidebarButton
              key={`${index}-${item.link}`}
              {...item}
              onClick={() => router.push(item.link!)}
              isActive={pathname.includes(item.link!)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-purple-600 text-white p-1 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
      >
        {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </div>
  );
};

export default Sidebar;
