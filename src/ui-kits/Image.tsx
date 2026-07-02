import { TImage } from "@type/Image";

export default function Image(props: TImage) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={props.alt} loading={props.loading ?? 'lazy'} width={props.width} height={props.height} decoding={props.decoding ?? 'async'}
      data-nimg="1" style={{ color: 'transparent' }} srcSet={props.src} src={props.src}></img>
  )
}