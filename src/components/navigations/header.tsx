import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export function Header() {
  //ui hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("primary", "secondary")}
        px={4}
        position={"sticky"}
        top={0}
        boxShadow={"md"}
        zIndex={2}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"sm"}
              variant={"ghost"}
              icon={<MdMenu style={{ transform: "translateX(65%" }} />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Heading as={Link} to={"/"} fontWeight={"normal"} size={"md"}>
              Hideout
            </Heading>
          </HStack>
          <HStack alignItems={"center"} spacing={2}>
            <IconButton
              size={"sm"}
              icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={"Theme"}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
