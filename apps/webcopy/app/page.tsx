"use client";
import { Button } from "@workspace/ui/components/button";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);
  console.log(users);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Mia</h1>
        <Button size="sm">Button</Button>

        <div className=" text-rose-900">
          {users?.length
            ? users.map((e) => e.name ?? "Unknown User")
            : "I Love You Achu"}
        </div>
      </div>
    </div>
  );
}
