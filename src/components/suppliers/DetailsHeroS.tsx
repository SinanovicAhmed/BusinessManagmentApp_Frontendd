import { useQuery } from "react-query";
import { getSupplierDetails } from "../../services/api/supplierAPI";
import { Button } from "../globalUI/Button";
import { Loading } from "../globalUI/Loading";

interface id {
  id: string | undefined;
}

export const DetailsHeroS = ({ id }: id) => {
  const { isLoading, isError, data, error } = useQuery(`supplier-${id}`, () =>
    getSupplierDetails(id)
  );
  console.log(data?.supplier_name);
  console.log(data);
  if (isLoading) return <Loading />;
  return (
    <>
      <h2 className="text-[30px] text-sky-800 font-bold uppercase py-5 ml-5">
        {data?.supplier_name}
      </h2>
      <div className="w-[100%] max-w-[1500px] h-screen flex flex-col items-center">
        <div className="bg-gray-100 mb-[50px] w-[100%]">
          <div className="px-[20px]">
            <p className="text-md text-gray-500">Contact Person</p>
            <p className="mb-2 text-lg font-medium">{data?.contact_person}</p>
            <p className="text-md text-gray-500">Phone Number</p>
            <p className="mb-2 text-lg font-medium">{data?.phone_number}</p>
            <p className="text-md text-gray-500">Email Adress</p>
            <p className="mb-2 text-lg font-medium">{data?.email_adress}</p>
          </div>
        </div>
        <Button name="Update supplier" type="button" />
      </div>
    </>
  );
};
