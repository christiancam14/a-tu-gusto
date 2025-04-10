import useCartStore from "../store/cartStore";
import { CarouselItemProps } from "../types/product";

export const CarouselItem = ({
  item,
  handleSeeMore,
  carouselRef,
  isActive,
  index,
}: CarouselItemProps) => {
  const { detail, introduce } = item;

  const addItem = useCartStore((state) => state.addItem);

  return (
    <div
      className={`item absolute left-0 w-full md:w-[90%] h-full text-sm transition-[left_0.5s,opacity_0.5s,width_0.5s]
 ${index}`}
    >
      <div
        className={`w-3/4 md:w-1/2 absolute right-0 top-[48%] md:top-[57%] ${
          isActive && "img-container"
        }`}
      >
        <img
          src={`/products/${item.image}`}
          alt={detail.title}
          className="product-image filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] md:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.2)] absolute right-0 -translate-y-1/2 transition-right duration-[1500ms] max-h-[500px] object-contain z-10"
          width={500}
          height={300}
          draggable="false"
        />
        <img
          src={`/fruits/fresas.png`}
          alt={detail.title}
          className="fruit filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] md:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.2)]  -translate-y-1/2 w-full -translate-x-24 md:w-5/6 md:-translate-x-36 transition-right duration-[1500ms] max-h-[500px] object-contain"
          width={800}
          height={300}
          draggable="false"
        />
      </div>
      <div className="introduce text-white flex flex-col gap-4 w-auto items-start">
        <div className="title text-2xl font-extrabold whitespace-nowraps">
          {introduce.title}
        </div>
        <div className="topic text-[40px] md:text-5xl font-stopbuck leading-9 md:leading-12">
          {introduce.topic}
        </div>
        <div className="des text-white font-myriad text-lg font-normal leading-6 overflow-visible">
          {introduce.des}
        </div>
        <button
          className="seeMore text-white font-stopbuck mt-5 text-xl bg-transparent hover:bg-[#00c6da] border-b-2 cursor-pointer"
          onClick={handleSeeMore}
        >
          Ver más
        </button>
      </div>
      <div className="detail text-white flex flex-col gap-4">
        <div className="title font-stopbuck leading-6 md:leading-12">
          {detail.title}
        </div>
        <div className="des font-myriad text-base font-normal leading-4">
          {detail.des}
        </div>
        <div className="specifications flex flex-col md:flex-row pt-4">
          {detail.specifications.map((spec, index) => (
            <div key={index} className="font-myriad text-base">
              <p className="font-amsi text-xl">{spec.label}</p>
              <p>{spec.value}</p>
            </div>
          ))}
        </div>
        <div className="checkout">
          <button
            onClick={() => addItem(item)}
            className="font-stopbuck rounded-xl cursor-pointer border border-[#5555] ml-[5px] px-2.5 py-1.5 tracking-widest font-medium bg-[#00c6da]"
          >
            AÑADIR AL CARRITO
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
