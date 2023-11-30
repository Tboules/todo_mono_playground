import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { TrpcProvider } from "./_trpc/provider";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TrpcProvider>
      <SafeAreaView style={styles.container}>
        <Text>Hello Trpc App</Text>
        <TodoList />
        <StatusBar style="auto" />
      </SafeAreaView>
    </TrpcProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
