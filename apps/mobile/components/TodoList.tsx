import { Text, SafeAreaView, FlatList, View } from "react-native";
import { trpc } from "../_trpc/client";

export default function TodoList() {
  const todosQuery = trpc.todos.all.useQuery();

  return (
    <SafeAreaView>
      <FlatList
        data={todosQuery.data}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.task}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
