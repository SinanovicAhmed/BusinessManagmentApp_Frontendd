import { useState } from "react";
import { useMutation } from "react-query";
import { ISupplierPost } from "../../services/Interfaces/supplier";
import { addSupplier } from "../../services/api/supplierAPI";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialSupplier = {
  supplier_name: "",
  email_adress: "",
  UID: null,
  VAT: null,
  phone_number: "",
  contact_person: "",
  starting_date: "",
};

export const SupplierForm = () => {
  const [supplier, setSupplier] = useState(initialSupplier);
  const navigate = useNavigate();

  const { mutate } = useMutation((supplier: ISupplierPost) => addSupplier(supplier), {
    onSuccess: () => {
      toast.success("Employee added successfully");
      navigate(-1);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const updateSupplierInfo = (property: string, value: string | number) => {
    setSupplier((prevSupplier) => ({
      ...prevSupplier,
      [property]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(supplier);
      }}
      className="w-[100%] min-h-[80%] p-5 flex flex-col"
    >
      <div className="w-[100%] flex justify-between">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Supplier name</label>
          <input
            value={supplier.supplier_name}
            onChange={(e) => updateSupplierInfo("supplier_name", e.target.value)}
            placeholder="eg. Violeta"
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Contact person</label>
          <input
            value={supplier.contact_person}
            onChange={(e) => updateSupplierInfo("contact_person", e.target.value)}
            placeholder="eg. John Doe"
            type="text"
            id="contact_person"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input
            value={supplier.email_adress}
            onChange={(e) => updateSupplierInfo("email_adress", e.target.value)}
            placeholder="eg. name_surname@gmail.com"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
          <input
            value={supplier.phone_number}
            onChange={(e) => updateSupplierInfo("phone_number", e.target.value)}
            placeholder="eg. 061835923"
            type="tel"
            id="phone_number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">VAT number</label>
          <input
            value={supplier.VAT ? supplier.VAT : ""}
            onChange={(e) => updateSupplierInfo("VAT", e.target.value)}
            placeholder="eg. 123456789"
            type="text"
            id="vat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Starting date</label>
          <input
            value={supplier.starting_date}
            onChange={(e) => updateSupplierInfo("starting_date", e.target.value)}
            type="date"
            id="starting_date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div className="mb-6 w-[45%]">
        <label className="block mb-2 text-sm font-medium text-gray-900">UUID</label>
        <input
          value={supplier.UID ? supplier.UID : ""}
          onChange={(e) => updateSupplierInfo("UID", e.target.value)}
          placeholder="eg. 1234567"
          type="text"
          id="uid"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                   font-medium rounded-lg text-sm w-[30%] mx-auto mt-[30px] px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};
