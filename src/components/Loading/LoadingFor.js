import React from "react";
import styles from "./forLoading.module.css";
import PuffLoader from "react-spinners/PuffLoader";
export default function LoadingFor() {
  return (
    <div className={styles.loader}>
      <PuffLoader
        className={styles.loader1}
        color={"#2C0091"}
        size={100}
        loading={true}
      />
    </div>
  );
}
