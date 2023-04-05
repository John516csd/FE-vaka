import { Center, Flex, Link, Box } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Center w="100%" bg="#fff" alignItems="center">
      <Center w="100%" maxW="1200px" gap="64px" zIndex={1}>
        <Center p="12px">
          <Link href="/" fontSize="24px">
            🏡
          </Link>
        </Center>
        {/* Link Group */}
        <Flex flex={1}>
          <Center p="12px">
            <Link href="/demo">📚 Demos</Link>
          </Center>
        </Flex>
      </Center>
    </Center>
  );
};

export default Header;
