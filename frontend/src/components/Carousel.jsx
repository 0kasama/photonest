"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="border border-slate-500">
      <section className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((imageUrl, index) => (
              <div className='embla__slide' key={index}>
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  className='embla__slide__image'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmblaCarousel;
