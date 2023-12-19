"use client";

import { Carousel } from "antd";
import Image from "next/image";
import { useState } from "react";

interface ImageType {
  src: string;
  alt: string;
}

const images: ImageType[] = [
  {
    src: "/assets/images/image1.jpg",
    alt: "Image 1 description",
  },
  {
    src: "/assets/images/image2.png",
    alt: "Image 2 description",
  },
  {
    src: "/assets/images/image3.jpg",
    alt: "Image 3 description",
  },
];

const ManageVehiclePage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <div className="w-2/4">
        <Carousel
          dots={true}
          autoplay
          autoplaySpeed={6000}
          beforeChange={(current, next) => setSelectedImageIndex(next)}
          ref={(ref) => ref?.goTo(selectedImageIndex)}
        >
          {images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="h-96 object-contain"
            />
          ))}
        </Carousel>
        <div className="flex justify-center mt-8">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              // className="h-96 object-contain mx-2"
              className={`object-contain mx-2 cursor-pointer ${
                selectedImageIndex === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageVehiclePage;
