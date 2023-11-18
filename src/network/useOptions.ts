import { Options } from "../types/options";
import { useGet } from "./useGet";

export function useOptions() {
  return useGet<Options>('options', [])
}
