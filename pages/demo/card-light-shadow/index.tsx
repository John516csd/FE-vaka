import { Center } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Layout from "../../../components/Layout";
import styles from "./index.module.scss";

const CardLightShadow = () => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  const handleMouseMove = (e) => {
    console.log("🚀 ~ handleMouseMove ~ e:", e);
    const childrenArr = Array.from(cardWrapperRef.current?.children);
    childrenArr.forEach((item: HTMLDivElement) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      item.style.setProperty("--x", `${x}px`);
      item.style.setProperty("--y", `${y}px`);
    });
  };

  useEffect(() => {
    cardWrapperRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardWrapperRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Layout bg="#000">
      <Center minH="100vh">
        <div className={styles.card_wrapper} ref={cardWrapperRef}>
          <div className={styles.card}>
            <div className={styles.card_inner}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_inner}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_inner}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_inner}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_inner}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_inner}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_inner}></div>
          </div>
        </div>
      </Center>
    </Layout>
  );
};
export default CardLightShadow;
