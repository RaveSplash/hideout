import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/default-layout";
interface ProfilePageProps {
  title?: string;
  subtitle?: string;
  image?: string;
  ctaLink?: string;
  ctaText?: string;
}

export function ProfilePage({
  title = "Hideout",
  subtitle = "This is the subheader section where you describe the basic benefits of your products",
  image = "/hideout.avif",
  ctaLink = "/login",
  ctaText = "Sign Up",
  ...rest
}: ProfilePageProps) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      no-wrap
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          No credit card required.
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} sizes="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}
