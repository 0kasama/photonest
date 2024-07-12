"use client";

import { useEffect, useState } from "react";
import { findAllImages } from "@/fetch/image";
import Link from "next/link";

export default function ImageCard() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await findAllImages();
        if (data && data.images) {
          const sortedImages = data.images.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setImages(sortedImages);
        }
      } catch (err) {
        console.error("Error fetching images", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div className='mb-3 flex justify-center items-center'>
        <h1 className='font-bold text-3xl'>Latest Images</h1>
      </div>
      <div className='flex flex-wrap gap-5 justify-center items-center'>
        {images.map((image) => (
          <div
            key={image.id}
            className='overflow-hidden bg-red-100 shadow-xl rounded-xl'
            style={{ width: "16rem", height: "16rem" }}
          >
            <Link href={`/p/${image.slug}`}>
              <img
                src={image.url}
                alt={image.title}
                className='object-cover w-full h-full transition-all hover:scale-125 ease-in-out duration-300'
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
