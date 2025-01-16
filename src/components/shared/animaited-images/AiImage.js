import Image from "next/image";
import aiImage from "@/assets/images/herobanner/1.png";

const AiImage = () => {
  return (
    <Image
      className="absolute   "
      src={aiImage}
      alt=""
      placeholder="blur"
    />
  );
};

export default AiImage;
