"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { childrenProps } from "@/types/types";

export function Providers({ children }: childrenProps) {
  return <Provider store={store}>{children}</Provider>;
}
