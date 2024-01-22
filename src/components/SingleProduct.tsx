import { useParams } from "react-router-dom";
import UseFetchData from "../hooks/UseFetchData";

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const SingleProduct = () => {
  const { id } = useParams();

  const { data, loading, error } = UseFetchData(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <img width={200} height={200} src={data?.images[0]} alt={data?.title} />
      <p>{data?.title}</p>
      <p>{data?.price}</p>
    </>
  );
};

export default SingleProduct;
