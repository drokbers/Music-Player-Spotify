import Dashboard from "@/components/dashboard";

import Panel from "@/components/panel";
import BottomNav from "@/components/bottomNav";
import Playlists from "@/components/playlists";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-row">
      <Dashboard />
      <Playlists />
      <Panel />
      <BottomNav />
    </main>
  );
}
