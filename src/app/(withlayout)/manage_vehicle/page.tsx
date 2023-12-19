"use client";

import { Carousel, Modal } from "antd";
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
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const handlePreview = (image: ImageType) => {
    setSelectedImage(image);
    setPreviewVisible(true);
  };

  const handleClosePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <>
      <Carousel
        className="w-1/3  max-h-3 bg-red-800"
        dots={true}
        dotPosition="top"
      >
        <></>
        {/* {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            onClick={() => handlePreview(image)}
          />
        ))} */}
      </Carousel>
      {previewVisible && selectedImage && (
        <Modal
          title={selectedImage?.alt}
          visible={previewVisible}
          onCancel={handleClosePreview}
          footer={null}
        >
          (
          {/* <Image
            src={selectedImage?.src}
            alt={selectedImage?.alt}
            width={500}
            height={500}
          /> */}
          <Image
            src={selectedImage?.src}
            alt={selectedImage?.alt}
            width={100}
            height={500}
            style={{ maxWidth: "200px", height: "auto" }}
          />
          )
        </Modal>
      )}
    </>
  );
};

export default ManageVehiclePage;
