import { useParams } from "react-router-dom";
import { Header } from "../components/globalUI/Header";
import { OrderDetailsHero } from "../components/orders/OrderDetailsHero";

export const OrderDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-[100%] h-screen flex flex-col">
      <Header
        header="Order details"
        paragraph="More detailed view of orders, order status and it's expected arrival."
      />
      <OrderDetailsHero id={id} />
    </div>
  );
};
