// src/data/productData.js
import Cinnamon_Pic_1 from "../assets/images/ProductImages/Cinnamon1.jpg";
import Cinnamon_Pic_2 from "../assets/images/ProductImages/Cinnamon2.jpg";
import Cinnamon_Pic_3 from "../assets/images/ProductImages/Cinnamon3.png";

import Vanilla_Pic_1 from "../assets/images/ProductImages/Vanilla1.jpg"
import Vanilla_Pic_2 from "../assets/images/ProductImages/Vanilla2.jpg"
import Vanilla_Pic_3 from "../assets/images/ProductImages/Vanilla3.jpg"

import BP1 from "../assets/images/ProductImages/BP1.jpg"
import BP2 from "../assets/images/ProductImages/BP2.jpg"

import KC1 from "../assets/images/ProductImages/KingCoco1.webp"
import KC2 from "../assets/images/ProductImages/KingCoco2.webp"


const productData = [
    {
        id: 1,
        name: "King Coconut",
        image: KC2,
        hoverImage: KC1,
        productImages: [KC1, KC2],
        productTitle: "Sri Lankan King Coconut",
        productDesc: `Sri Lankan King Coconut (Thembili) is a bright orange variety of coconut native to Sri Lanka, prized for its naturally sweet and refreshing water. It is rich in electrolytes, antioxidants, and essential minerals like potassium and magnesium, making it a hydrating natural energy drink. Unlike regular coconuts, it has a thinner husk and softer flesh, often consumed fresh for its health benefits.`
    },
    {
        id: 2,
        name: "Cinnamon",
        image: Cinnamon_Pic_1,
        hoverImage: Cinnamon_Pic_2,
        productImages: [Cinnamon_Pic_1, Cinnamon_Pic_2, Cinnamon_Pic_3],
        productTitle: "Cinnamon",
        productDesc: `Sri Lankan Cinnamon (Cinnamomum verum), also known as "True Cinnamon" or "Ceylon Cinnamon," is a highly prized spice native to Sri Lanka. It has a delicate, sweet aroma and a mild, refined flavor, making it superior to the more common Cassia cinnamon. Rich in antioxidants and anti-inflammatory properties, Sri Lankan cinnamon is widely used in culinary, medicinal, and cosmetic applications. Its thin, multi-layered bark is carefully hand-rolled and sun-dried, preserving its quality and purity.`
    },
    {
        id: 3,
        name: "Black Pepper",
        image: BP2,
        hoverImage: BP1,
        productImages: [BP1, BP2],
        productTitle: "The Black Pepper",
        productDesc: `Sri Lankan Black Pepper (Piper nigrum) is a high-quality spice known for its strong, pungent aroma and bold, spicy flavor. Grown in Sri Lanka’s tropical climate, it is rich in piperine, which enhances its medicinal and culinary value. Used in both local and global cuisines, Sri Lankan black pepper is prized for its antioxidant, anti-inflammatory, and digestive benefits.`
    },
    {
        id: 4,
        name: "Vanilla",
        image: Vanilla_Pic_1,
        hoverImage: Vanilla_Pic_2,
        productImages: [Vanilla_Pic_1, Vanilla_Pic_2, Vanilla_Pic_3],
        productTitle: "Vanilla",
        productDesc: `Sri Lankan Vanilla (Vanilla planifolia) is a premium-quality spice known for its rich, creamy aroma and smooth, sweet flavor. Grown in Sri Lanka’s tropical climate, the vanilla beans are carefully hand-pollinated and sun-cured to enhance their depth of flavor. Widely used in gourmet cooking, baking, and perfumery, Sri Lankan vanilla is prized for its high vanillin content and natural sweetness.`
    },

];

export default productData;
