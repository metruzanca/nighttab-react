// The MIT License - Copyright (c) 2021 Samuele Zanca
// https://github.com/metruzanca/react-hooks

import { useRef } from "react";

export function useConstructor(callback = () =>  {}) {
  const firstExecution = useRef(true)
  if(firstExecution.current){
    firstExecution.current = false
    callback()
  }
}
