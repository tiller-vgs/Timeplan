import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return(
  <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
<div className="flex flex-col gap-y-10">
  <div className="flex flex-col items-center gap-y-10">
    <Link href={"/auth/login"}>
    <Button variant="secondary">Go to login</Button>
    </Link>
    </div>
</div>
  </main>
  );
}
