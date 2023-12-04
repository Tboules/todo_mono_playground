import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";
import { TrpcProvider } from "./_trpc/provider";

export default function App() {
  return (
    <View style={styles.container}>
      <TrpcProvider>
        <TodoList />
      </TrpcProvider>
      <StatusBar style="auto" />
    </View>
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
