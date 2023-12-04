import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";
import { TrpcProvider } from "./_trpc/provider";
import TodoForm from "./components/TodoForm";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TrpcProvider>
        <View className="flex-1 p-2 bg-blue-100 items-center justify-center">
          <Text className="text-2xl mb-2 font-bold">Todo List</Text>
          <TodoForm />
          <TodoList />
        </View>
      </TrpcProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
