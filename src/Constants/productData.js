// src/data/productData.js
import Cinnamon_Pic_1 from "../assets/images/ProductImages/Cinnamon1.jpg";
import Cinnamon_Pic_2 from "../assets/images/ProductImages/Cinnamon2.jpg";
import Vanilla_Pic_1 from "../assets/images/ProductImages/Vanilla1.jpg"
import Vanilla_Pic_2 from "../assets/images/ProductImages/Vanilla2.jpg"
import BP1 from "../assets/images/ProductImages/BP1.jpg"
import BP2 from "../assets/images/ProductImages/BP2.jpg"
import KC1 from "../assets/images/ProductImages/KingCoco1.webp"
import KC2 from "../assets/images/ProductImages/KingCoco2.webp"


const productData = [
    {
        id: 4,
        name: "King Coconut",
        image: KC2,
        hoverImage: KC1,
    },
    {
        id: 1,
        name: "Cinnamon",
        image: Cinnamon_Pic_1,
        hoverImage: Cinnamon_Pic_2,
    },
    {
        id: 3,
        name: "Black Pepper",
        image: BP2,
        hoverImage: BP1,
    },
    {
        id: 2,
        name: "Vanilla",
        image: Vanilla_Pic_1,
        hoverImage: Vanilla_Pic_2,
    },
    
];

export default productData;
