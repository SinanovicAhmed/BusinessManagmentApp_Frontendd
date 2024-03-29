import { IMaterial, IMaterialOrderPost } from "../../services/Interfaces/material";
import { IOrderPost } from "../../services/Interfaces/order";
import { ISupplier } from "../../services/Interfaces/supplier";
import { useState } from "react";
import { saveOrder } from "../../services/api/orderAPI";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface Props {
  materials: IMaterial[];
  suppliers: ISupplier[];
}

const initialOrder = {
  supplier_id: "",
  order_status: "",
  expected_arrival: "",
  ordered_materials: [],
};

const initialMaterial = {
  material_id: "",
  quantity: 0,
};

export const OrderForm = ({ suppliers, materials }: Props) => {
  const statusOptions = ["Processing", "In transit", "Canceled", "Delivered"];
  const navigate = useNavigate();
  const [newMaterial, setNewMaterial] = useState<IMaterialOrderPost>(initialMaterial);
  const [order, setOrder] = useState<IOrderPost>(initialOrder);

  const { isLoading, isError, error, mutate } = useMutation((order: IOrderPost) => saveOrder(order), {
    onSuccess: () => {
      toast.success("Material successfully added");
      navigate(-1);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const submitMaterial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrder((prevState) => ({
      ...prevState,
      ordered_materials: [...prevState.ordered_materials, newMaterial],
    }));
    setNewMaterial(initialMaterial);
  };

  const updateMaterial = (property: string, value: string | number) => {
    setNewMaterial((prevMaterial) => ({
      ...prevMaterial,
      [property]: value,
    }));
  };

  const updateOrderInfo = (property: string, value: string | number) => {
    setOrder((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const submitOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(order);
  };

  return (
    <div className="w-full overflow-y-auto">
      <form className="w-[100%] px-5 flex justify-between items-center" onSubmit={submitMaterial}>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Material</label>
          <select
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                           focus:border-blue-500 block w-full p-2.5"
            value={newMaterial.material_id}
            onChange={(e) => updateMaterial("material_id", e.target.value)}
            required
          >
            <option value="" disabled selected>
              Add materials
            </option>
            {materials.map((material) => (
              <option key={material._id} value={material._id}>
                {material.material_name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6 w-[20%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
          <input
            value={newMaterial.quantity}
            onChange={(e) => updateMaterial("quantity", parseInt(e.target.value))}
            placeholder="eg. 20"
            type="number"
            id="name"
            min={1}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                     font-medium rounded-lg text-sm w-[200px] py-2.5 text-center"
        >
          Add material
        </button>
      </form>
      <h2 className="pl-5 text-[22px] font-bold text-gray-700">Added materials</h2>
      <div className="flex gap-2 pl-5">
        {order.ordered_materials.length === 0 ? (
          <p className="text-gray-500">No materials added</p>
        ) : (
          order.ordered_materials.map((material) => (
            <div className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200">
              <h2>ID: {material.material_id}</h2>
              <h2>Quantity: {material.quantity}</h2>
            </div>
          ))
        )}
      </div>
      <form onSubmit={submitOrder} className="w-[100%] p-5 flex flex-col items-center">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Supplier</label>
          <select
            id="name"
            onChange={(e) => updateOrderInfo("supplier_id", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          >
            <option value="" disabled selected>
              Select a supplier
            </option>
            {suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier._id}>
                {supplier.supplier_name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Order status</label>
          <select
            id="name"
            onChange={(e) => updateOrderInfo("order_status", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          >
            <option value="" disabled selected>
              Select order status
            </option>
            {statusOptions.map((orderStatus) => (
              <option key={orderStatus} value={orderStatus}>
                {orderStatus}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Expected Arrival</label>
          <input
            type="date"
            onChange={(e) => updateOrderInfo("expected_arrival", e.target.value)}
            id="starting_date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                     font-medium rounded-lg text-sm w-[30%] mx-auto mt-[30px] px-5 py-2.5 text-center disabled:grayscale"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
