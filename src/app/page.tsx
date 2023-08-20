import Dashboard from "@/components/dashboard";
import Body from "@/components/body";
import Panel from "@/components/panel";
import BottomNav from "@/components/bottomNav";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-row">
      <Dashboard />
      <Body />
      <Panel />
      <BottomNav />
    </main>
  );
}
