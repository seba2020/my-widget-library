import React from "react";
import styles from "./styles.module.css";

export function MyInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...restProps } = props;
  return <input className={`${className} ${styles.input}`} {...restProps} />;
}
