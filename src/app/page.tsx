import Dashboard from "@/components/dashboard";
import Body from "@/components/body";
import Panel from "@/components/panel";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-row">
      <Dashboard />
      <Body />
      <Panel />
    </main>
  );
}
