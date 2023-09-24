import { Container, Flex } from "@chakra-ui/react";
import { Header } from "../navigations/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <Flex direction={"column"}>
      <Header></Header>

      <Outlet />
    </Flex>
  );
}
