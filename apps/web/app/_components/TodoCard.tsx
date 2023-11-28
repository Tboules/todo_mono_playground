"use client";
import { trpc } from "../_trpc/client";
import { RouterOutputs } from "@repo/api";
import styles from "../styles.module.css";

export default function TodoCard({
  todo,
}: {
  todo: RouterOutputs["todos"]["all"][number];
}) {
  const todosUpdate = trpc.todos.update.useMutation();
  const todosDelete = trpc.todos.delete.useMutation();
  const utils = trpc.useUtils();

  return (
    <div className={styles.todoCard} key={todo.id}>
      <p className={styles.label}>{todo.task}</p>
      <input
        className={styles.checkbox}
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
