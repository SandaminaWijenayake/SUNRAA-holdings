import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import contactBG from "../../assets/images/king_coco.jpg";
import productData from "../../Constants/productData";

const ViewProduct = () => {
    const { id } = useParams(); // Get product ID from URL
    const productInfo = productData.find((product) => product.id === parseInt(id));

    if (!productInfo) {
        return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
    }

    const ProductImages = productInfo.productImages;
    const [mainImage, setMainImage] = useState(ProductImages[0]);

    useEffect(() => {
        setMainImage(ProductImages[0]);
    }, [ProductImages]);

    return (
        <>
            <div
                className="contact-header w-full h-[25vh] md:h-[30vh] lg:h-[35vh] flex flex-col items-center justify-center relative bg-cover bg-center mt-[8.7vh]"
                style={{ backgroundImage: `url(${contactBG})` }}
            >
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white relative">
                    View Product Information
                </h2>
            </div>
            <div className="w-full bg-black flex justify-center py-[5vh]">
                <div className="w-[85%] bg-white py-[5vh] flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <div className="w-full lg:w-[70vh] h-[40vh] lg:h-[65vh] mb-4">
                            <img
                                src={mainImage}
                                alt="Main Product"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-row flex-wrap justify-center gap-2 lg:gap-5 w-full">
                            {ProductImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-16 h-16 lg:w-24 lg:h-24 object-cover cursor-pointer border border-orange-500"
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-5 mt-8 lg:mt-0">
                        <h1 className="text-2xl font-bold mb-4 text-orange-500">
                            {productInfo.productTitle}
                        </h1>
                        <p className="text-gray-700 mb-6">{productInfo.productDesc}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;
