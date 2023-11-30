"use client";

import { FormEvent, useRef } from "react";
import { trpc } from "../_trpc/client";
import { Input } from "@repo/ui/components/ui/input";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosMutation = trpc.todos.create.useMutation();
  const utils = trpc.useUtils();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (inputRef.current?.value) {
      todosMutation.mutate(
        {
          task: inputRef.current?.value,
        },
        {
          onSuccess: () => {
            utils.todos.all.invalidate();
          },
        },
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input title="Todo" placeholder="Todo" ref={inputRef} type="text" />
    </form>
  );
}
