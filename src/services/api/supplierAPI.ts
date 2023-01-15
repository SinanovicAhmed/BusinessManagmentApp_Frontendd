import axios from "axios";
interface supplier {
  _id: string;
  supplier_name: string;
  UID: number;
  VAT: number;
  phone_number: number;
  contact_person: string;
  email_adress: string;
  starting_date: string;
  ending_date: string;
}
interface supplierPost {
  supplier_name: string;
  UID: number;
  VAT: number;
  phone_number: number;
  contact_person: string;
  email_adress: string;
  starting_date: string;
}
export const getSuppliers = async (): Promise<supplier[]> => {
  const response = await axios.get(
    "http://localhost:3000/api/supplier/get-suppliers",
    {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const addSupplier = async (supplier: supplierPost) => {
  const response = await axios.post(
    "http://localhost:3000/api/supplier/add-supplier",
    supplier,
    {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
export type { supplier };
