"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./../styles/carousel-styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useColorStore } from "../store/colorStore";
import CarouselItem from "./carousel-item";

interface ProductCarouselProps {
  items: {
    image: string;
    color: string;
    introduce: {
      title: string;
      topic: string;
      des: string;
    };
    detail: {
      title: string;
      des: string;
      specifications: { label: string; value: string }[];
      checkout: {
        addToCart: string;
        checkout: string;
      };
    };
  }[];
}

function ProductCarousel({ items }: ProductCarouselProps) {
  const [mainItemIndex, setMainItemIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const animationTimeout = useRef<NodeJS.Timeout | null>(null);

  const setColorClass = useColorStore((state) => state.setColorClass);

  const showSlider = useCallback(
    (type: "next" | "prev") => {
      if (!carouselRef.current || !listRef.current) return;

      const listHTML = listRef.current;
      const itemsHTML = listHTML.querySelectorAll(".item");

      carouselRef.current.classList.remove("next", "prev");

      if (type === "next") {
        if (itemsHTML.length > 0) {
          listHTML.appendChild(itemsHTML[0]);
          carouselRef.current.classList.add("next");
          setMainItemIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
      } else {
        if (itemsHTML.length > 0) {
          listHTML.prepend(itemsHTML[itemsHTML.length - 1]);
          carouselRef.current.classList.add("prev");
          setMainItemIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
          );
        }
      }
    },
    [carouselRef, listRef, items.length]
  );

  const handleSeeMore = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.classList.remove("next", "prev");
      carouselRef.current.classList.add("showDetail");
    }
  }, [carouselRef]);

  useEffect(() => {
    const backButtonElement = document.getElementById("back");
    const seeMoreButtons = document.querySelectorAll(".seeMore");

    seeMoreButtons.forEach((button) => {
      (button as HTMLButtonElement).onclick = handleSeeMore;
    });
    if (backButtonElement) {
      backButtonElement.onclick = () =>
        carouselRef.current?.classList.remove("showDetail");
    }

    return () => {
      seeMoreButtons.forEach((button) => {
        (button as HTMLButtonElement).onclick = null;
      });
      if (backButtonElement) {
        backButtonElement.onclick = null;
      }
      clearTimeout(animationTimeout.current as NodeJS.Timeout);
    };
  }, [handleSeeMore, items]);

  useEffect(() => {
    const mainItem = items[mainItemIndex];
    if (
      mainItem &&
      ["bg-azul", "bg-amarillo", "bg-rojo"].includes(mainItem.color)
    ) {
      setColorClass(mainItem.color as "bg-azul" | "bg-amarillo" | "bg-rojo");
    }
  }, [mainItemIndex, items, setColorClass]);

  return (
    <div
      className="carousel relative h-[650px] md:h-[800px] overflow-hidden -mt-12"
      ref={carouselRef}
    >
      <div
        className="list absolute w-7xl max-w-11/12 h-full md:h-4/5 left-1/2 -translate-x-1/2"
        ref={listRef}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            handleSeeMore={handleSeeMore}
            carouselRef={carouselRef}
            index={index}
            isActive={index === (mainItemIndex + 1) % items.length}
          />
        ))}
      </div>
      <div className="absolute bottom-0 md:bottom-20 w-[1140px] max-w-1/2 md:max-w-[93%] flex justify-between left-1/2 -translate-x-1/2">
        <button
          id="prev"
          onClick={() => showSlider("prev")}
          className="bg-white size-10 rounded-full flex items-center justify-center cursor-pointer shadow-2xl left-"
        >
          <ArrowLeft className="stroke-[#00c6da]" />
        </button>
        <button
          id="next"
          onClick={() => showSlider("next")}
          className="bg-white size-10 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
        >
          <ArrowRight className="stroke-[#00c6da]" />
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;
