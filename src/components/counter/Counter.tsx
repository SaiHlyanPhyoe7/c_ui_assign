"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increaseByAmount,
} from "../../redux/feature/counter/counterSlice";
import { RootState } from "@/redux/store";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(increaseByAmount(2))}>
        Increase By Two
      </button>
    </main>
  );
}
