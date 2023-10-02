import Image from "next/image";

const ImageComponent = ({ src, classes, alt, objectFit, onClick }) => {
  return (
    <div className={classes} onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: `${objectFit}`,
        }}
      />
    </div>
  );
};

export default ImageComponent;
