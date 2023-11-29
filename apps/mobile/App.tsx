import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TrpcProvider } from "./_trpc/provider";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TrpcProvider>
      <View style={styles.container}>
        <Text>Hello Trpc App</Text>
        <TodoList />
        <StatusBar style="auto" />
      </View>
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
