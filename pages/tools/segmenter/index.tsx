import { Button, Center, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import * as styles from "./index.module.scss";

const Segmenter = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleChange = (e) => {
    console.log("🚀 ~ file: index.tsx:12 ~ handleChange ~ e:", e);
    setInputValue(e.target.value);
  };

  const handleSegment = () => {
    const segmenter = new Intl.Segmenter("ja", { granularity: "word" });

    const segments = [];
    let resStr = '';
    const arr = Array.from(segmenter.segment(inputValue));
    for (const segment of arr) {
      segments.push(segment.segment);
      resStr += segment.segment + '<wbr />'
    }

    setOutputValue(resStr);

    console.log(segments);
  };

  return (
    <Layout>
      <Center minH="100vh">
        <Center w="full" flexDir="column" gap="24px" maxW="1200px">
        <Textarea minH="300px" value={inputValue} onChange={(e) => handleChange(e)} />
        <Button onClick={handleSegment}>分词</Button>
        <Textarea minH="300px" value={outputValue} />
        </Center>
      </Center>
    </Layout>
  );
};
export default Segmenter;
