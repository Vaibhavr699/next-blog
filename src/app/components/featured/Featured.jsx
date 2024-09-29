import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to Showughts </b> <br/>Discover stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/robot.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Is A.I. Really Dangerous for Humanity?</h1>
          <p className={styles.postDesc}>
          Artificial Intelligence (A.I.) is one of the most groundbreaking technological 
          advancements of our time, sparking both excitement and concern. It has transformed 
          industries, simplified complex tasks, and opened up new possibilities for innovation. 
          Yet, as A.I. continues to evolve, a question lingers in the minds of many: Is A.I. 
          really dangerous for humanity?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;