const ProductHomePage = ({ children }) => {
    return (
        <div className="w-full p-4 border flex align-middle justify-center bg-black">
            <div className="w-[85%] flex flex-row flex-wrap gap-8 justify-center">
                {children}
            </div>
        </div>
    );
}

export default ProductHomePage;
