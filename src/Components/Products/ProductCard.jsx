import { useState } from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ id, image, hoverImage, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="w-72 h-96 relative cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-transform duration-500 ease-in-out"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 1.5s ease-in-out",
        }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold drop-shadow-lg">
            {name}
          </h2>
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={hoverImage}
            alt={`${name} Hover`}
            className="absolute w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <h2 className="text-xl font-bold text-white mb-4 z-10">{name}</h2>
          <button
            className="z-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 shadow-md hover:from-orange-600 hover:to-orange-700 transition duration-300"
            onClick={() => navigate(`/viewProduct/${id}`)}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
