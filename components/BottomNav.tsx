"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Gallery", path: "/dashboard/gallery" },
    { name: "Library", path: "/dashboard/library" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Chat", path: "/dashboard/chat" },
    { name: "Profile", path: "/dashboard/profile" },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-inner py-3 border-t border-gray-200 flex justify-around z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.path || (item.path === "/dashboard" && pathname === "/dashboard");

        return (
          <button
            key={item.name}
            onClick={() => router.push(item.path)}
            className={`flex-1 text-center py-2 font-semibold rounded-t-lg transition-colors ${
              isActive
                ? "text-[#ff7f50] bg-[#ffe6dd]" // highlight active with bg
                : "text-gray-500 hover:text-[#ff7f50] hover:bg-gray-100"
            }`}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}
