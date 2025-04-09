import React from "react";

interface CarouselItemProps {
  item: {
    image: string;
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
  };
  handleSeeMore: () => void;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
  index: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  handleSeeMore,
  carouselRef,
  isActive,
  index,
}) => {
  return (
    <div
      className={`item absolute left-0 w-full md:w-[90%] h-full text-sm transition-[left_0.5s,opacity_0.5s,width_0.5s]
 ${index}`}
    >
      <div
        className={`w-1/2 absolute right-0 top-[57%] ${
          isActive && "img-container"
        }`}
      >
        <img
          src={`/products/${item.image}`}
          alt={item.detail.title}
          className="filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] md:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.2)] absolute right-0 -translate-y-1/2 transition-right duration-[1500ms] max-h-[500px] object-contain z-10"
          width={500}
          height={300}
          draggable="false"
        />
        <img
          src={`/assets/fruits/fresas.png`}
          alt={item.detail.title}
          className="fruit filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] md:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.2)]  -translate-y-1/2 -translate-x-36 transition-right duration-[1500ms] max-h-[500px] object-contain"
          width={800}
          height={300}
          draggable="false"
        />
      </div>
      <div className="introduce text-white flex flex-col gap-4 items-start">
        <div className="title text-2xl font-extrabold ">
          {item.introduce.title}
        </div>
        <div className="topic text-5xl font-stopbuck leading-12">
          {item.introduce.topic}
        </div>
        <div className="des text-white font-myriad text-base font-normal leading-4">
          {item.introduce.des}
        </div>
        <button
          className="seeMore text-white font-stopbuck mt-5 text-xl bg-transparent hover:bg-[#00c6da] border-b-2 cursor-pointer"
          onClick={handleSeeMore}
        >
          Ver más
        </button>
      </div>
      <div className="detail text-white flex flex-col gap-4">
        <div className="title font-stopbuck leading-12">
          {item.detail.title}
        </div>
        <div className="des font-myriad text-base font-normal leading-4">
          {item.detail.des}
        </div>
        <div className="specifications flex pt-4">
          {item.detail.specifications.map((spec, index) => (
            <div key={index} className="flex-1 font-myriad text-base">
              <p>{spec.label}</p>
              <p>{spec.value}</p>
            </div>
          ))}
        </div>
        <div className="checkout">
          <button className="font-stopbuck rounded-xl cursor-pointer bg-transparent border border-[#5555] ml-[5px] px-2.5 py-1.5 tracking-widest font-medium">
            {item.detail.checkout.addToCart}
          </button>
          <button className="font-stopbuck rounded-xl cursor-pointer border border-[#5555] ml-[5px] px-2.5 py-1.5 tracking-widest font-medium bg-[#00c6da]">
            {item.detail.checkout.checkout}
          </button>
        </div>
        <button
          id="back"
          onClick={() => carouselRef?.current?.classList.remove("showDetail")}
          className="font-stopbuck text-xl border-b-2 border-white z-50 absolute -bottom-16 right-0 transition-opacity duration-500 hover:bg-[#00c6da]  opacity-0 cursor-pointer"
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
