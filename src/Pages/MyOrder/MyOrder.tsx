import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { ShoppingCartContext } from "../../Context/Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-5">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].products.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};
