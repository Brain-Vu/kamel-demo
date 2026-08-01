export function randDec(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
export function randInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}