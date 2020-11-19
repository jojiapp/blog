import { createContext } from "react";

export const prefix =
  process.env.NODE_ENV === "production" ? "https://jojiapp.github.io/blog" : "";
export const PrefixContext = createContext(prefix);
