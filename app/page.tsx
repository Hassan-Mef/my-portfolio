import Clients from "@/components/Clients";
import Experince from "@/components/Experince";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/process";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FLoatingNav";
import { navItems } from "@/Data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects />
        <Clients />
        <Experince />
        <Process  />
      </div>
    </main>
  );
}
