import { EMPTY_STRING, REGAX_FORMAT } from "./const";

export function formatText(text: string) {
  const processedText = text.replace(REGAX_FORMAT, EMPTY_STRING);
  return processedText.toLowerCase();
}
