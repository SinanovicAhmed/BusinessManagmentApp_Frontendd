import { IThreeCardData } from "../../services/Interfaces/dashboard";

const ThreeCard = ({ data }: { data: IThreeCardData }) => {
  return (
    <div className="shadow-md w-full h-full border-2 border-[#e8e8e8] rounded-md py-2">
      <div className="w-full flex justify-center items-center pb-2">
        <h2 className="font-bold text-slate-600 pr-10">Expected orders</h2>
        {data.icon}
      </div>
      <div className="w-full flex justify-between px-2 my-2">
        <div className="w-full border-r-2 border-gray-300 flex flex-col items-center">
          <h2 className="text-[15px] text-gray-400">Expected orders today</h2>
          <p className="text-[40px] font-bold text-gray-800 pb-2">{data.data1}</p>
        </div>
        <div className="w-full border-r-2 border-gray-300 flex flex-col items-center">
          <h2 className="text-[15px] text-gray-400">Expected orders this week</h2>
          <p className="text-[40px] font-bold text-gray-800 pb-2">{data.data2}</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[15px] text-gray-400">Expected orders this month</h2>
          <p className="text-[40px] font-bold text-gray-800 pb-2">{data.data3}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCard;
