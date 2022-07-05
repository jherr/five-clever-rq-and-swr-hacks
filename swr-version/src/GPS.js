import useSWR from "swr";
import { Text } from "@mantine/core";

const getGPSCoordinates = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const GPS = () => {
  const { data } = useSWR("gps", getGPSCoordinates);
  return <Text>Location: {JSON.stringify(data)}</Text>;
};

export default GPS;
