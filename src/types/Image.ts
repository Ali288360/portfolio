export type TImage = {
  src: string,
  alt: string,
  loading?: "lazy" | "eager",
  width?: string | number,
  height?: string | number,
  decoding?: "async" | "sync",
}