import { ImageProps, getImageProps } from "next/image";

const Img = (props: ImageProps) => {
  return <img {...getImageProps(props).props} />;
};

export default Img;
