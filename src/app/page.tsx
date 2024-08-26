import Client from "@/components/organisms/clients";
import Hero from "@/components/organisms/hero";

export default function Home() {
  return (
    <div className="px-32 mb-10">
      <Hero />
      <Client />
    </div>
  );
}
