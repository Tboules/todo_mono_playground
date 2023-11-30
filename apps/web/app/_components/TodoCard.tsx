"use client";
import { Button } from "../../@/components/ui/button";
import { trpc } from "../_trpc/client";
import { RouterOutputs } from "@repo/api";

export default function TodoCard({
  todo,
}: {
  todo: RouterOutputs["todos"]["all"][number];
}) {
  const todosUpdate = trpc.todos.update.useMutation();
  const todosDelete = trpc.todos.delete.useMutation();
  const utils = trpc.useUtils();

  return (
    <div key={todo.id}>
      <p>{todo.task}</p>
      <input
        type="checkbox"
        onChange={(e) => {
          todosUpdate.mutate(
            {
              ...todo,
              status: e.target.checked == true ? "done" : "in-progress",
              lastUpdated: new Date(Date.now()),
            },
            {
              onSuccess: () => {
                utils.todos.invalidate();
              },
            },
          );
        }}
        checked={todo.status == "done"}
        disabled={todosUpdate.isLoading}
      />

      <button
        className="h-10 bg-slate-50 p-4"
        disabled={todosDelete.isLoading}
        onClick={() => {
          todosDelete.mutate(
            { id: todo.id },
            {
              onSuccess: () => utils.todos.invalidate(),
            },
          );
        }}
      >
        D
      </button>
    </div>
  );
}
