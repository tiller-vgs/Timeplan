import Link from "next/link";

import {Button} from "@/components/ui/button"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
        <div className="flex justify-center">
            <h1 className="text-5xl" >Hjemmeside</h1>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 h-screen">

            <Button asChild>
                <Link href="/schedule">1IM Timeplan</Link>
            </Button>

            <Button asChild>
                <Link href="/schedule">1IM Timeplan</Link>
            </Button>
            <Button asChild>
                <Link href="/schedule">1IM Timeplan</Link>
            </Button>

        </div>
    </main>
  );
}