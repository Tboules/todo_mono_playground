"use client";
import { trpc } from "../_trpc/client";

export default function TestComponent() {
  const { data } = trpc.test.useQuery();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
