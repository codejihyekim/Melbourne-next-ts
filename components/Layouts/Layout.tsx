import React, { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";
import Header  from "./Header";
import Footer from "./Footer";

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props){
  return (
    <div className={styles.container}>
      <Header/>
        {children}
      <Footer/>
    </div>
  );
}