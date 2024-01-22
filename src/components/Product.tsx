import { Link } from "react-router-dom";
import TrunCateTitle from "../utils/TrunCateTitle";

const Product = ({ item }: any) => {
  const { id, title, price, images } = item;

  return (
    <Link to={`/products/${id}`}>
      <div key={id} className="flex flex-col items-center">
        <img width={200} height={200} src={images[0]} alt={title} />
        <p className="my-2">{TrunCateTitle(title, 25)}</p>
        <p className="bg-black px-8 py-1 text-white rounded-full my-1">
          $ {price}
        </p>
      </div>
    </Link>
  );
};

export default Product;
