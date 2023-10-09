import { useQuery } from "react-query";
import SingleCard from "./SingleCard";
import { FaTruck, FaBoxOpen, FaClipboardList, FaUsers, FaUser } from "react-icons/fa";
import { getDashboardInfo } from "../../services/api/dashboardAPI";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./calendarStyles.css";
import ThreeCard from "./ThreeCard";
import { Loading } from "../globalUI/Loading";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const DashboardInfo = () => {
  const { data, isLoading, error } = useQuery("dashboard_data", getDashboardInfo);
  const [value, onChange] = useState<Value>(new Date());
  if (isLoading) return <Loading />;
  return (
    <div className="grid grid-cols-5 auto-cols-auto grid-rows-2 gap-10 justify-between px-5">
      <SingleCard
        data={{
          data1: data?.employeeCount!,
          data2: data?.employeesWoAccount!,
          description: "employees don't have account",
          title: "Employees",
          icon: <FaUser />,
        }}
      />
      <SingleCard
        data={{
          data1: data?.productCount!,
          data2: data?.productsInStock!,
          description: "products are in stock.",
          title: "Products",
          icon: <FaBoxOpen />,
        }}
      />
      <SingleCard
        data={{
          data1: data?.orderCount!,
          data2: data?.ordersToday!,
          description: "orders are expected to arrive today.",
          title: "Orders",
          icon: <FaTruck />,
        }}
      />
      <div className="col-span-3 col-start-1 row-start-2">
        <ThreeCard
          data={{
            data1: data?.ordersToday!,
            data2: data?.ordersWeek!,
            data3: data?.ordersMonth!,
            icon: <FaTruck />,
          }}
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-4 row-start-1">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default DashboardInfo;
