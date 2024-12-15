import { useEffect, useRef } from "react";
import Layout from "../../../components/Layout";
import styles from "./index.module.scss";

const ShineCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tempY = x - rect.width / 2;
    const tempX = y - rect.height / 2;
    const percent = (x / rect.width) * 100;

    cardRef.current?.style.setProperty("--rotateY", `${(tempY / 10) * -1}deg`);
    cardRef.current?.style.setProperty("--rotateX", `${tempX / 10}deg`);
    cardRef.current?.style.setProperty("--percent", `${percent}%`);
  };

  const handleMouseLeave = () => {
    cardRef.current?.style.setProperty("--rotateY", `0deg`);
    cardRef.current?.style.setProperty("--rotateX", `0deg`);
    cardRef.current?.style.setProperty("--percent", `30%`);
  };

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    handleMouseLeave();

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Layout bg="transparent">
      <div className={styles.wrapper}>
        <div className={styles.shine_card} ref={cardRef}>
          <img src="../../../static/image/534143_1000x1000.webp" alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default ShineCard;
