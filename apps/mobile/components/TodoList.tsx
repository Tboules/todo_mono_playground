import { Text, View } from "react-native";
import { trpc } from "../_trpc/client";
import { useEffect } from "react";

export default function TodoList() {
  const todosQuery = trpc.todos.all.useQuery();

  useEffect(() => {
    console.log(todosQuery.data);
  }, [todosQuery.data]);

  return (
    <View>
      <Text>Hello Card List</Text>
    </View>
  );
}
