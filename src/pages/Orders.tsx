import { Button } from "../components/globalUI/Button";
import { Header } from "../components/globalUI/Header";
import { OrdersTable } from "../components/orders/OrdersTable";

export const Orders = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <div className="flex items-center pr-6">
        <Header header="Orders" paragraph="Create orders and track their status." />
        <Button name="Create orders" type="button" />
      </div>
      <OrdersTable />
    </div>
  );
};
