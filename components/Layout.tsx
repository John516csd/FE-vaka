import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "./header";
import Menu from "./menu";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Box bg="cornsilk" pos="relative">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Menu />
    {children}
    <footer></footer>
  </Box>
);

export default Layout;
