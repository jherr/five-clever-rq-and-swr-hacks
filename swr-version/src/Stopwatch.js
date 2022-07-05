import { useRef } from "react";
import useSWR from "swr";
import { Text } from "@mantine/core";

const createStopwatch = () => {
  const startTime = Date.now();
  return () => {
    return Math.round((Date.now() - startTime) / 1000);
  };
};

const Stopwatch = () => {
  const stopwatchRef = useRef(createStopwatch());
  const { data } = useSWR("stopwatch", stopwatchRef.current, {
    refreshInterval: 100,
    dedupingInterval: 100,
  });

  return <Text>Time: {data}</Text>;
};

export default Stopwatch;
