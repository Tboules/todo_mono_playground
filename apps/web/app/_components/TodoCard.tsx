"use client";
import { Input } from "@repo/ui/components/ui/input";
import { trpc } from "../_trpc/client";
import { RouterOutputs } from "@repo/api";
import { Button } from "@repo/ui/components/ui/button";

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
      <Input
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

      <Button
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
      </Button>
    </div>
  );
}
