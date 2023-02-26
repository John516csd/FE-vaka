import { Box, Center, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";

const CommentCard = () => {
  const commentsRef = useRef<HTMLDivElement>();
  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.scrollingElement;
    const phase = scrollTop / (scrollHeight - clientHeight);
    commentsRef.current.style.transform = `translateY(calc(-50% + 100px)) translateZ(calc(150vh * ${phase} + 100px)) rotateX(90deg)`;
    console.log("🚀 ~ file: index.tsx:10 ~ onScroll ~ phase:", phase);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Box className={styles.container}>
      <Box className={styles.scroll_container}></Box>
      <Box className={styles.comments_wrapper}>
        <Center
          flexDir="column-reverse"
          gap="60px"
          className={styles.comments_container}
          ref={commentsRef}
        >
          <Box className={styles.comment_item}>
            <Image
              src="https://picsum.photos/id/38/256/256"
              className={styles.comment_avatar}
            />
            <Text>Scroll to see the comment</Text>
          </Box>
          <Box className={styles.comment_item}>
            <Image
              src="https://picsum.photos/id/99/256/256"
              className={styles.comment_avatar}
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              rerum non quod nulla excepturi.
            </Text>
          </Box>
          <Box className={styles.comment_item}>
            <Image
              src="https://picsum.photos/id/38/256/256"
              className={styles.comment_avatar}
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              rerum non quod nulla excepturi.
            </Text>
          </Box>
          <Box className={styles.comment_item}>
            <Image
              src="https://picsum.photos/id/99/256/256"
              className={styles.comment_avatar}
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              rerum non quod nulla excepturi.
            </Text>
          </Box>
          <Box className={styles.comment_item}>
            <Image
              src="https://picsum.photos/id/38/256/256"
              className={styles.comment_avatar}
            />
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>
          <Box className={styles.comment_item}>
            <Image
              src="https://picsum.photos/id/99/256/256"
              className={styles.comment_avatar}
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              rerum non quod nulla excepturi.
            </Text>
          </Box>
          <Box className={styles.comment_item}>
            <Image
              src="https://picsum.photos/id/99/256/256"
              className={styles.comment_avatar}
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              rerum non quod nulla excepturi.
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default CommentCard;
