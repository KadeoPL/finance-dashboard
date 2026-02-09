import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-w-svw min-h-svh grid place-content-center">
      <Link href={"/dashboard"}>
        <Button>Go to dashboard</Button>
      </Link>
    </main>
  );
}
