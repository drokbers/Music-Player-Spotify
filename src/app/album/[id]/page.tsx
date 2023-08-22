

import Dashboard from "@/components/dashboard";
import Albums from "@/components/album";
import Panel from "@/components/panel";
import BottomNav from "@/components/bottomNav";


export default function AlbumPage(params: {
  params: any; id: string 
}) {
  
console.log(params.params.id),"params";


  return (
    <main className="flex h-screen w-screen flex-row">
      <Dashboard  />
      <Albums id={params.params.id} />
      <Panel />
      <BottomNav />
    </main>
  );
}
