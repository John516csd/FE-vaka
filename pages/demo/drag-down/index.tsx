import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import Layout from "../../../components/Layout";
import { Box } from "@chakra-ui/react";
import Flip from "../../../utils/flip";

const DragList = () => {
  const dragListRef = useRef<HTMLDivElement>(null);

  const raf = (callback: () => void) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(callback);
    });
  };

  useEffect(() => {
    const dragList = dragListRef.current;
    let sourceTarget: HTMLElement | null = null;
    if (dragList) {
      const handleDragStart = (e: DragEvent) => {
        setTimeout(() => {
          if (e.target instanceof HTMLElement) {
            e.target.classList.add(styles.dragging);
          }
        }, 0);
        sourceTarget = e.target as HTMLElement;
      };

      const handleDragEnd = (e: DragEvent) => {
        if (e.target instanceof HTMLElement) {
          e.target.classList.remove(styles.dragging);
        }
      };

      const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
      };

      const handleDragEnter = (e: DragEvent) => {
        e.preventDefault();
        if (e.target === dragList || e.target === sourceTarget) return;

        const targetDom = e.target as HTMLElement;
        const children = Array.from(dragList.children);
        const targetIndex = children.indexOf(targetDom);
        const sourceIndex = children.indexOf(sourceTarget as HTMLElement);

        if (targetIndex === -1 || sourceIndex === -1) return;

        const targetDomStartTop = targetDom.getBoundingClientRect().top;

        const insertBeforeElement =
          targetIndex < sourceIndex
            ? targetDom
            : (targetDom.nextElementSibling as HTMLElement);

        dragList.insertBefore(sourceTarget, insertBeforeElement);

        const targetDomEndTop = targetDom.getBoundingClientRect().top;
        const distance = targetDomStartTop - targetDomEndTop;

        targetDom.style.transition = "none";
        targetDom.style.transform = `translateY(${distance}px)`;

        raf(() => {
          targetDom.style.transition = "transform 1s";
          targetDom.style.removeProperty("transform");
        });

        // console.log("🚀 ~ handleDragEnter ~ distance:", distance);
      };

      dragList.addEventListener("dragstart", handleDragStart);
      dragList.addEventListener("dragend", handleDragEnd);
      dragList.addEventListener("dragover", handleDragOver);
      dragList.addEventListener("dragenter", handleDragEnter);

      // Cleanup function to remove event listeners
      return () => {
        dragList.removeEventListener("dragstart", handleDragStart);
        dragList.removeEventListener("dragend", handleDragEnd);
        dragList.removeEventListener("dragover", handleDragOver);
        dragList.removeEventListener("dragenter", handleDragEnter);
      };
    }
  }, []);

  return (
    <Layout>
      <Box
        w="full"
        minH="100vh"
        display="flex"
        flexDirection="column"
        gap={6}
        justifyContent="center"
        alignItems="center"
        ref={dragListRef}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Box
            key={index}
            className={styles.drag_item}
            draggable
            id={`drag_item_${index}`}
          >
            {index + 1}
          </Box>
        ))}
      </Box>
    </Layout>
  );
};
export default DragList;
