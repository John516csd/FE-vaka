import { Box, Center, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { getTodoList } from "../api/test";
import Layout from "../components/Layout";

const IndexPage = () => {
  // const getData = async () => {
  //   let rs = await getTodoList();
  //   console.log("🚀 ~ file: index.tsx:12 ~ getData ~ rs:", rs)
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Center w="full" minH="100vh">
        <Text as="h1">I'm Vaka 👋</Text>
      </Center>
    </Layout>
  );
};

export default IndexPage;
