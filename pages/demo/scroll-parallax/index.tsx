import { Box, Center, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Display from "../../../components/display";
import Layout from "../../../components/Layout";
import styles from "./index.module.scss";

const ScrollParallax = () => {
  const randomImagesUrl = [
    "https://source.unsplash.com/kL3u4Tqfn1s",
    "https://source.unsplash.com/yVUQlyRlJSw",
    "https://source.unsplash.com/7H77FWkK_x4",
    "https://source.unsplash.com/r7YZXv5f5cc",
    "https://source.unsplash.com/KQ75n3P8EJA",
    "https://source.unsplash.com/psdV2Rl-GvU",
    "https://source.unsplash.com/gGIJGnpMZfo",
    "https://source.unsplash.com/j7AMlh2MMHc",
    "https://source.unsplash.com/U3cctUBucn0",
    "https://source.unsplash.com/SMKR4zjSdd4",
    "https://source.unsplash.com/psdV2Rl-GvU",
    "https://source.unsplash.com/K-94QEMm3vo",
    "https://source.unsplash.com/j7AMlh2MMHc",
    "https://source.unsplash.com/D68ADLeMh5Q",
    "https://source.unsplash.com/BzuUDHCi_vo",
    "https://source.unsplash.com/ua2vQnsn_x0",
    "https://source.unsplash.com/TGOGwgPR1_Q",
    "https://source.unsplash.com/oqStl2L5oxI",
    "https://source.unsplash.com/XazoYQRnDZo",
    "https://source.unsplash.com/YfgE8WCcZsQ",
    "https://source.unsplash.com/NpMWgJ1_Ohk",
    "https://source.unsplash.com/SU35VU5de1o",
    "https://source.unsplash.com/TbUL8w1C-0s",
    "https://source.unsplash.com/bOvvgayPCyI",
  ];

  return (
    <Layout>
      <Center flexDir="column" gap="24px">
        {randomImagesUrl.map((url, index) => {
          return (
            <Box w="70%" h="600px" key={index} overflow="hidden">
              <Box h="130%">
                <Image src={url} w="full" h="full" objectFit="cover" />
              </Box>
            </Box>
          );
        })}
      </Center>
    </Layout>
  );
};

export default ScrollParallax;
