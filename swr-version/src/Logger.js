import useSWR from "swr";
import { Text, Stack } from "@mantine/core";

const subscribeToLog = () => {
  let log = [];
  let logIndex = 0;

  setInterval(() => {
    log.push(`${logIndex}: ${Date.now()}`);
    log = log.slice(-3);
    logIndex++;
  }, 100);

  return () => {
    return log;
  };
};

const logListener = subscribeToLog();

const Logger = () => {
  const { data } = useSWR("log", logListener, {
    refreshInterval: 1000,
    dedupingInterval: 1000,
  });

  return (
    <Stack>
      {data?.map((line, index) => (
        <Text key={line}>{line}</Text>
      ))}
    </Stack>
  );
};

export default Logger;
