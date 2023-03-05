import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./index.module.scss";

const ColorfulText = () => {
  return (
    <Center w="100vw" h="100vh" bg="#000">
      <Box>
        <Text className={styles.paraph}>
          灵动的 iPhone
          新玩法，迎面而来。重大的安全新功能，为拯救生命而设计。创新的 4800
          万像素主摄，让细节纤毫毕现。更有 iPhone
          芯片中的速度之王，为一切提供强大原动力。
        </Text>
      </Box>
    </Center>
  );
};

export default ColorfulText;
