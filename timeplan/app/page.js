import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">

        <h1 className="text-8xl">Hjemmeside</h1>


        <div>
            <ul>
                <li>
                    <Link href="/schedule">1IM Timeplan</Link>
                </li>
            </ul>
        </div>
    </main>
  );
}