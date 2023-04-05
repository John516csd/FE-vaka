import { Box, Center, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import CommonCard from "../../components/cards/common-card";
import Layout from "../../components/Layout";
import { routes } from "../../routes";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Center w="full" minH="100vh">
        {routes.map((item, index) => {
          const title = item.label;
          const baseUrl = item.url;
          const children = item.children;
          return (
            <Center key={index} flexDir="column" gap="64px">
              <Text as="h2">{title}</Text>
              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  sm: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                }}
                gap="24px"
              >
                {children.map((cardItem, index) => {
                  return (
                    <GridItem key={index}>
                      <CommonCard
                        label={cardItem.label}
                        url={baseUrl + cardItem.url}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </Center>
          );
        })}
      </Center>
    </Layout>
  );
};

export default IndexPage;
