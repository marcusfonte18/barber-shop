import React from "react";
import { User, ScrollText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuSection = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 mb-6">
      <nav className="space-y-3">
        <Link
          href="/cortes"
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
            pathname === "/cortes"
              ? "bg-amber-500/10 text-amber-500"
              : "text-zinc-400 hover:bg-zinc-800/50"
          }`}
        >
          <ScrollText className="h-4 w-4" />
          <span className="text-sm font-medium">Nossos Cortes</span>
        </Link>

        <Link
          href="/sobre"
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
            pathname === "/sobre"
              ? "bg-amber-500/10 text-amber-500"
              : "text-zinc-400 hover:bg-zinc-800/50"
          }`}
        >
          <User className="h-4 w-4" />
          <span className="text-sm font-medium">Quem Sou Eu</span>
        </Link>
      </nav>
    </div>
  );
};