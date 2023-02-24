import { useEffect, useRef } from "react";
import Layout from "../../../components/Layout";
import styles from "./index.module.scss";

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const multiple = 20;

  const handleMouseMove = (e: MouseEvent) => {
    const boxRect = boxRef.current.getBoundingClientRect();
    let calcY = (e.clientX - boxRect.x - boxRect.width / 2) / multiple;
    let calcX = (e.clientY - boxRect.y - boxRect.height / 2) / multiple;
    boxRef.current.style.transform = `rotateX(${-calcX}deg) rotateY(${calcY}deg)`;
  };

  const handleMouseLeave = (e: MouseEvent) => {
    boxRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", (e) => {
      window.requestAnimationFrame(() => {
        handleMouseMove(e);
      });
    });
    containerRef.current.addEventListener("mouseleave", (e) => {
      window.requestAnimationFrame(() => {
        handleMouseLeave(e);
      });
    });
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div ref={containerRef} className={styles.container}>
        <div ref={boxRef} className={styles.box}>
          <img src="../../../static/image/super-mario.svg" />
        </div>
      </div>
    </Layout>
  );
};

export default App;
