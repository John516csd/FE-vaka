import { Center, Link, Text } from "@chakra-ui/react";
import React from "react";

interface IProp {
  label: string;
  url: string;
}

const CommonCard = ({ label, url }: IProp) => {
  return (
    <Link href={url}>
      <Center
        w="200px"
        h="200px"
        boxShadow="0px 16px 60px rgba(0, 0, 0, 0.05);"
        borderRadius="12px"
        bg="#fff"
      >
        <Text as="h4">{label}</Text>
      </Center>
    </Link>
  );
};

export default CommonCard;
