import { ISingleCardData } from "../../services/Interfaces/dashboard";

const SingleCard = ({ data }: { data: ISingleCardData }) => {
  return (
    <div className="shadow-md w-full h-full border-2 border-[#e8e8e8] rounded-md">
      <div className="w-full flex justify-between items-center px-2 py-2">
        <h2 className="font-bold text-slate-600">{data.title}</h2>
        {data.icon}
      </div>
      <div className="w-full flex justify-between items-center px-2 min-h-[80px]">
        <h2 className="text-[40px] font-bold text-gray-800 w-[30%] pb-2">{data.data1}</h2>
        <p className="w-[70%] text-gray-400 text-[12px] py-2">
          <span className="text-gray-800 text-[14px] font-bold">{data.data2} </span>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
