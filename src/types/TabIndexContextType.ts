import { Dispatch, SetStateAction } from "react";

export type TabIndexContextType = {
    index: number,
    setIndex: (newIndex: number) => void;
  }