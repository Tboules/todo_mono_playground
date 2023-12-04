import { TextInput } from "react-native";
import { trpc } from "../_trpc/client";
import { useState } from "react";

export default function TodoForm() {
  const todoMutation = trpc.todos.create.useMutation();
  const utils = trpc.useUtils();
  const [value, setValue] = useState<string>("");

  function handleSubmit() {
    if (value) {
      todoMutation.mutate(
        { task: value },
        {
          onSuccess: () => {
            utils.todos.all.invalidate();
            setValue("");
          },
        },
      );
    }
  }

  return (
    <TextInput
      className="bg-red-50 border-black border rounded p-2 mb-4 w-full"
      onSubmitEditing={handleSubmit}
      value={value}
      onChangeText={setValue}
    />
  );
}
