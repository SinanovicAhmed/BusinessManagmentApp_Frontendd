import { useState } from "react";
import { IMaterial } from "../../services/Interfaces/material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";
import { addMaterial } from "../../services/api/materialAPI";

const materialInitial = {
  material_name: "",
  min_quantity: null,
  quantity: null,
  unit_of_measure: "",
};

export const MaterialForm = () => {
  const [material, setMaterial] = useState<IMaterial>(materialInitial);
  const navigate = useNavigate();

  const { isLoading, isError, error, mutate } = useMutation(
    (material: IMaterial) => addMaterial(material),
    {
      onSuccess: () => {
        toast.success("Material successfully added");
        navigate(-1);
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.error);
        }
      },
    }
  );
  const updateName = (name: string) => {
    setMaterial((prevState) => ({ ...prevState, material_name: name }));
  };
  const updateQuantity = (quantity: number) => {
    setMaterial((prevState) => ({ ...prevState, quantity: quantity }));
  };
  const updateMinQuantity = (minQuantity: number) => {
    setMaterial((prevState) => ({ ...prevState, min_quantity: minQuantity }));
  };
  const updateUOM = (UOM: string) => {
    setMaterial((prevState) => ({ ...prevState, unit_of_measure: UOM }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(material);
      }}
      className="w-[100%] min-h-[80%] p-5 flex flex-col"
    >
      <div className="w-[100%] flex flex-col justify-between items-center">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Material name</label>
          <input
            value={material.material_name}
            onChange={(e) => updateName(e.target.value)}
            placeholder="eg. wood"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
          <input
            value={material.quantity ? material.quantity : ""}
            onChange={(e) => updateQuantity(parseInt(e.target.value))}
            placeholder="eg. 26"
            type="number"
            min="0"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Minimal Quantity</label>
          <input
            value={material.min_quantity ? material.min_quantity : ""}
            onChange={(e) => updateMinQuantity(parseInt(e.target.value))}
            placeholder="eg. 100"
            type="number"
            min="0"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Minimal Quantity</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            value={material.unit_of_measure}
            onChange={(e) => updateUOM(e.target.value)}
          >
            <option value="" disabled>
              Unit of measure
            </option>
            <option value="kg">kg</option>
            <option value="L">L</option>
            <option value="m">m</option>
            <option value="m²">m²</option>
          </select>
        </div>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                   font-medium rounded-lg text-sm w-[30%] mx-auto mt-[30px] px-5 py-2.5 text-center disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
};
