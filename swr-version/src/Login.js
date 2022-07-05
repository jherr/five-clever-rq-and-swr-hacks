import useSWR from "swr";
import { Text } from "@mantine/core";

const fetchLogin = () => fetch("/login.json").then((resp) => resp.json());
const fetchUser = (id) => fetch(`/${id}.json`).then((resp) => resp.json());

const login = async () => {
  const loginResp = await fetchLogin();
  return await fetchUser(loginResp.id);
};

const Login = () => {
  const { data: user } = useSWR("login", login);

  return <Text>{JSON.stringify(user)}</Text>;
};

export default Login;
