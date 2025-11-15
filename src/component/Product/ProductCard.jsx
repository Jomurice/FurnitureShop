import { Link } from "react-router-dom";

const ProductCard = (props) => {

    const {id, img, name, price} = props;
    
    return (
        <Link
            to={`/products/${id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
        >
            <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                <img
                    src={img}
                    alt={name}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-900 font-bold mt-2">{price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
