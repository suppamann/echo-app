"use client";

import { Button } from "@workspace/ui/components/button";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.addUser);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello Achu</h1>
            <Button onClick={() => addUser()} size="sm">
              Button
            </Button>
            <div className=" text-rose-900">
              {users?.length
                ? users.map((e) => e.name ?? "Unknown User")
                : "I Love You Achu"}
            </div>
            <UserButton/>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>Do you love me?<SignInButton/></Unauthenticated>
    </>
  );
}
