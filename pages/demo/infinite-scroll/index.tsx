import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Display from "../../../components/display";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { LOGOS } from "../../../constants/infinite-scroll";
import { calcWindowSizeSign, getValueBySignSchema } from "../../../constants";

const LOGO_SIZE = {
  base: 100,
  md: 150,
  lg: 200,
};

const InfiniteScroll = () => {
  const [logoSize, setLogoSize] = useState(LOGO_SIZE.base);
  const [renderLogos, setRenderLogos]= useState(LOGOS);
  const MAX_W = 1600;

  const handleResize = () => {
    let windowWidth = window.innerWidth;
    if(windowWidth > MAX_W) {
      windowWidth = MAX_W;
    }
    const sign = calcWindowSizeSign(windowWidth);
    const logoSizeValue = getValueBySignSchema(sign, LOGO_SIZE);
    setLogoSize(logoSizeValue);

    const logoLen = LOGOS.length;
    const allLogoWidth = logoLen * logoSizeValue;
    const canContainLogoCount = Math.round(windowWidth / logoSizeValue);
    let renderLogos = [];

    if(allLogoWidth > windowWidth) {
      renderLogos = LOGOS;
    } else {
      for(let i = 0;i < canContainLogoCount;++i) {
        renderLogos.push(LOGOS[i % logoLen]);
      }
    }

    setRenderLogos([...renderLogos, ...renderLogos]);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Display>
      <Box maxW="1600px" w="full">
      <Box w="full" overflow="hidden">
        <Box className={styles.row_logos_container}>
          {[...renderLogos].map((item, index) => {
            return (
              <Image
                display="inline"
                objectFit="contain"
                w={`${logoSize}px`}
                h={`${logoSize}px`}
                src={item.src}
                alt={item.alt}
                key={index}
              />
            );
          })}
        </Box>
      </Box>
      </Box>
    </Display>
  );
};
export default InfiniteScroll;
