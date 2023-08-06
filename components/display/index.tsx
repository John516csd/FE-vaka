import { Center, others } from "@chakra-ui/react";
import React from "react";

const Display = ({ children, ...others }) => {
  return (
    <Center w="full" h="100vh" {...others} bg="cornsilk">
      {children}
    </Center>
  );
};
export default Display;
