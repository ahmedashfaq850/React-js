import UseFetchData from "../hooks/UseFetchData";
import Product from "./Product";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const DataFetchingMethods = () => {
  const { data, loading, error } = UseFetchData(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className=" w-full flex flex-wrap gap-5 justify-center p-5 cursor-pointer">
        {data?.map((product: Product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </>
  );
};

export default DataFetchingMethods;
