import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Box, Center, Text } from "@chakra-ui/react";
import Display from "../../../components/display";

const Collapse = () => {
  const collapseRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const [, content] = Array.from(
      collapseRef.current?.children
    ) as HTMLDivElement[];
    if (window.getComputedStyle(content).height === "0px") {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = "0px";
    }
  };

  //   或者使用 maxHeight
  //   const handleClick = () => {
  //     const [, content] = Array.from(
  //       collapseRef.current?.children
  //     ) as HTMLDivElement[];
  //     if (window.getComputedStyle(content).maxHeight === "0px") {
  //       content.style.maxHeight = content.scrollHeight + "px";
  //     } else {
  //       content.style.maxHeight = "0px";
  //     }
  //   };

  return (
    <Display>
      <Box
        className={styles.collapse}
        ref={collapseRef}
        borderRadius="12px"
        bg="whiteAlpha.600"
        maxW="600px"
      >
        <Box
          className={styles.title}
          padding="16px 12px"
          cursor="pointer"
          onClick={handleClick}
        >
          成都
        </Box>
        {/* 🙅 这个包着内容的容器不要设置padding，设置padding会导致maxHeight为0的时候依然会有padding撑着，会看到内容 */}
        <Box className={styles.content} transition="all 0.3s ease-in-out">
          <Box padding="0 12px 16px">
            和我在成都的街头走一走，直到所有的灯都熄灭了都不停留,
            我会挽着你的衣袖，你会把手揣进裤兜。
          </Box>
        </Box>
      </Box>
    </Display>
  );
};
export default Collapse;
