import { Box, Center, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { getTodoList } from "../api/test";
import Layout from "../components/Layout";
import styles from "./index.module.scss";

const IndexPage = () => {

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Center w="full" minH="100vh" className={`${styles.container}`}>
        <Text className={styles.welcome_text}>W</Text>
      </Center>
    </Layout>
  );
};

export default IndexPage;
