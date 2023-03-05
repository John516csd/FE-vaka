import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";
import styles from "./index.module.scss";

const ImageData = [
  {
    src: "https://media.altphotos.com/cache/images/2017/01/24/15/1504/mountains-landscape.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2017/02/22/06/1504/boat-lake-mountain.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2017/03/03/06/1504/feed-grass-hand-sheep.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2017/02/27/07/1504/new-zealand-mountains-road.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2017/02/27/15/1504/snow-peaks-panorama-summit.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2017/02/22/05/1504/cliff-sea-people.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2017/07/20/09/1504/sky-sea-clouds-calm.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2019/05/22/09/1504/landscape-lake.jpg",
    alt: "",
  },
  {
    src: "https://media.altphotos.com/cache/images/2017/02/18/15/1504/coastline-pink.jpg",
    alt: "",
  },
];

const classNames = [
  styles.slower,
  styles.faster,
  styles.slower1,
  styles.faster1,
  styles.slower2,
  styles.faster2,
  styles.slower3,
  styles.faster3,
  styles.slower,
  styles.faster,
];

const HorizontalScroll = () => {
  return (
    <Center
      boxSizing="border-box"
      flexDir="column"
      h="100vh"
      overflow="hidden"
      bg="cornsilk"
      p="0px"
      pos="relative"
    >
      <Box className={styles.image_container}>
        {ImageData.map((item, index) => {
          return (
            <Box
              className={`${styles.image_wrapper} ${classNames[index]}`}
              key={index}
            >
              <Image
                boxShadow="0 10px 50px #5f2f1182"
                border="20px solid #efecdb"
                borderRadius="12px"
                objectFit="cover"
                width="300px"
                src={item.src}
                alt={item.alt}
              />
            </Box>
          );
        })}
      </Box>
    </Center>
  );
};

export default HorizontalScroll;
