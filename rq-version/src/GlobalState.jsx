import { Text, TextInput, Stack } from "@mantine/core";
import { useQuery } from "react-query";

import client from "./client";

const useRQSGlobalState = (key, initialData) => [
  useQuery(key, () => initialData, {
    enabled: false,
    initialData,
  }).data,
  (value) => client.setQueryData(key, value),
];

const StateEditor = () => {
  const [value, setValue] = useRQSGlobalState("sharedText", "");
  return (
    <TextInput value={value} onChange={(evt) => setValue(evt.target.value)} />
  );
};

const StateViewer = () => {
  const [value] = useRQSGlobalState("sharedText", "");
  return <Text>{value}</Text>;
};

const GlobalState = () => {
  return (
    <Stack>
      <StateEditor />
      <StateViewer />
    </Stack>
  );
};

export default GlobalState;
