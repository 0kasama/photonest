import ImageCard from "@/components/ImageCard";
import EmblaCarousel from "@/components/Carousel";

export default function Home() {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDES = [
    "https://images.unsplash.com/photo-1528214968864-8dd00782fa9e?q=80&w=2119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526494631344-8c6fa6462b17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675756583711-ce312872227b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div>
      <div className="mb-5">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      <div>
        <ImageCard />
      </div>
    </div>
  );
}
