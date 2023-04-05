import { Box, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./index.module.scss";

const Test = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className={page >= 1 ? styles.page : styles["page--hidden"]}>
        <h1>Page 1</h1>
        <button onClick={handleNextPage}>Next page</button>
      </div>
      <div className={page >= 2 ? styles.page : styles["page--hidden"]}>
        <h1>Page 2</h1>
        <button onClick={handleNextPage}>Next page</button>
      </div>
      <div className={page >= 3 ? styles.page : styles["page--hidden"]}>
        <h1>Page 3</h1>
        <button onClick={handleNextPage}>Next page</button>
      </div>
    </div>
  );
};

export default Test;
