import Link from "next/link";

import {Button} from "@/components/ui/button"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
        <div className=" pt-3 flex justify-center">
            <h1 className="text-5xl" >Hjemmeside</h1>
        </div>

        <div className=" pt-20 flex items-center justify-center flex-col gap-4 ">

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