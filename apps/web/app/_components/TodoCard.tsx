"use client";
import { Input } from "@repo/ui/components/ui/input";
import { trpc } from "../_trpc/client";
import { RouterOutputs } from "@repo/api";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

export default function TodoCard({
  todo,
}: {
  todo: RouterOutputs["todos"]["all"][number];
}) {
  const todosUpdate = trpc.todos.update.useMutation();
  const todosDelete = trpc.todos.delete.useMutation();
  const utils = trpc.useUtils();

  return (
    <Card key={todo.id}>
      <CardHeader>
        <CardTitle>Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{todo.task}</p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Input
          type="checkbox"
          className='w-6'
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
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
