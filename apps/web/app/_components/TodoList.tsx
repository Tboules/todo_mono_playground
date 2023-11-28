"use client";

import { trpc } from "../_trpc/client";
import styles from "../styles.module.css";

export default function TodoList() {
  const todosQuery = trpc.todos.all.useQuery();
  const todosUpdate = trpc.todos.update.useMutation();
  const todosDelete = trpc.todos.delete.useMutation();
  const utils = trpc.useUtils();

  if (todosQuery.isLoading) {
    return (
      <div>
        <h4>loading...</h4>
      </div>
    );
  }

  if (todosQuery.isError) {
    return (
      <div>
        <h4>error...</h4>
      </div>
    );
  }

  return (
    <div>
      {todosQuery.data.map((todo) => {
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
      })}
    </div>
  );
}
