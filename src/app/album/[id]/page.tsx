

import Dashboard from "@/components/dashboard";
import Albums from "@/components/album";
import Panel from "@/components/panel";
import BottomNav from "@/components/bottomNav";


export default function AlbumPage({ params }: { params: { id: string } }) {
  



  return (
    <main className="flex h-screen w-screen flex-row">
      <Dashboard  />
      <Albums id={params.id} />
      <Panel />
      <BottomNav />
    </main>
  );
}
