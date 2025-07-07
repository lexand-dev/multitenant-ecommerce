"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();

  const { data: session } = useQuery(trpc.auth.session.queryOptions());

  return (
    <main className="flex flex-col p-24 items-start gap-y-8">
      {JSON.stringify(session?.user, null, 2)}
    </main>
  );
}
