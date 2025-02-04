import { useEffect, useRef } from "react";
import Display from "../../../components/display";
import Layout from "../../../components/Layout";
import styles from "./index.module.scss";

const staticScaleRatio = [
  1, 1, 1, 1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.5, 1.4, 1.3, 1.2, 1, 1, 1, 1, 1, 1,
];
console.log("🚀 ~ staticScaleRatio:", staticScaleRatio.length);

const MacBottomBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const range = 300;
  const maxScale = 1.5;

  const baseCurve = (x) => {
    if (x < 0) return 0;
    if (x > 1) return 0;
    return Math.sin(x * Math.PI);
  };

  const createCurve = (totalXDis, topX, minY, maxY) => {
    return function curve(x) {
      const beginX = topX - totalXDis / 2;
      const endX = topX + totalXDis / 2;
      if (x < beginX) return minY;
      if (x > endX) return minY;
      const yDis = maxY - minY;
      return baseCurve((x - beginX) / totalXDis) * yDis + minY;
    };
  };

  const layout = (curve) => {
    const containerDom = containerRef.current;
    if (!containerDom) return;
    const items = Array.from(containerDom.children);
    items.forEach((item: HTMLDivElement, index: number) => {
      const rect = item.getBoundingClientRect();
      const x = rect.x + rect.width / 2;
      const scale = curve(x);
      console.log("🚀 ~ items.forEach ~ scale:", scale)
      item.style.setProperty("--i", scale);
    });
  };

  useEffect(() => {
    const containerDom = containerRef.current;
    if (!containerDom) return;

    const handleMouseMove = (e) => {
      const curve = createCurve(range, e.clientX, 1, maxScale);
      layout(curve);
    };

    const handleMouseLeave = () => {
      layout(() => 1);
    };

    containerDom.addEventListener("mousemove", handleMouseMove);
    containerDom.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      containerDom.removeEventListener("mousemove", handleMouseMove);
      containerDom.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Layout>
      <Display>
        <div className={styles.wrapper}>
          <div className={styles.docker_wrapper}>
            <div className={styles.container} ref={containerRef}>
              {new Array(10).fill(0).map((_, index) => (
                <>
                  <div key={index} className={styles.item}></div>
                  {index !== 9 && <div className={styles.gap}></div>}
                </>
              ))}
            </div>
          </div>
        </div>
      </Display>
    </Layout>
  );
};

export default MacBottomBar;
