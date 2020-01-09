import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const image = images.map(image => <ImageCard style={{border: "1px solid red"}} key={image.id} image={image} />);
  return <div className="image-list">{image}</div>;
};

export default ImageList;
