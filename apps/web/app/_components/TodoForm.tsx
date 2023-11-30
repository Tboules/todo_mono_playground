"use client";

import { FormEvent, useRef } from "react";
import { trpc } from "../_trpc/client";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosMutation = trpc.todos.create.useMutation();
  const utils = trpc.useUtils();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log(e);
    console.log(inputRef.current?.value);

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
      <input
        title="Todo"
        placeholder="Todo"
        className="border border-black rounded p-2 w-full"
        ref={inputRef}
        type="text"
      />
    </form>
  );
}
