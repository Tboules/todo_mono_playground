import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";

export default function Page(): JSX.Element {
  return (
    <main>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
