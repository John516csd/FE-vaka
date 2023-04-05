import { Box, Center, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import CommonCard from "../components/cards/common-card";
import Layout from "../components/Layout";
import { routes } from "../routes";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Center w="full" minH="100vh">
        <Text as="h1">I'm Vaka 👋</Text>
      </Center>
    </Layout>
  );
};

export default IndexPage;
