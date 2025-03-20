import { useState } from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ id, image, hoverImage, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-3 ">
      <div
        className="w-64 h-64 bg-gray-100 rounded-xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? hoverImage : image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-[2.5s] ease-in-out"
          style={{ opacity: isHovered ? 0.8 : 1 }}
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <button
          className="mt-4 bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-300"
          onClick={() => navigate(`/viewProduct/${id}`)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
