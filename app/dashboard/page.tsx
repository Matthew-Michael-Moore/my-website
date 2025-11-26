"use client";

import BottomNav from "../../components/BottomNav";

export default function DashboardPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50 flex flex-col items-center justify-center">
      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold text-[#ff7f50] mb-4">Dashboard</h1>
      
      {/* Dashboard Description */}
      <p className="text-gray-700 text-center max-w-md">
        Welcome to your Dashboard! This is your central hub where you can access your library, gallery, chat, profile, and more.
      </p>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
