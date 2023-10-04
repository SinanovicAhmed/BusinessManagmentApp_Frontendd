import { useState } from "react";
import { IMaterial } from "../../services/Interfaces/material";
import { IMaterialProductPost, IProduct, IProductPost } from "../../services/Interfaces/product";
import { useMutation } from "react-query";
import { addProduct } from "../../services/api/productAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialMaterial = {
  material: "",
  quantity: 0,
};
const initialProduct = {
  product_name: "",
  product_desc: "",
  materials_needed: [],
};
const ProductForm = ({ materials }: { materials: IMaterial[] }) => {
  const [newMaterial, setNewMaterial] = useState<IMaterialProductPost>(initialMaterial);
  const [product, setProduct] = useState<IProductPost>(initialProduct);
  const navigate = useNavigate();

  const { isLoading, isError, error, mutate } = useMutation((product: IProductPost) => addProduct(product), {
    onSuccess: () => {
      toast.success("Product successfully added");
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
    setProduct((prevState) => ({
      ...prevState,
      materials_needed: [...prevState.materials_needed, newMaterial],
    }));
    setNewMaterial(initialMaterial);
  };

  const updateMaterial = (property: string, value: string | number) => {
    setNewMaterial((prevMaterial) => ({
      ...prevMaterial,
      [property]: value,
    }));
  };

  const updateProductInfo = (property: string, value: string | number) => {
    setProduct((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const submitProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(product);
  };

  return (
    <div className="w-full overflow-y-auto">
      <form className="w-[100%] flex justify-around items-center" onSubmit={submitMaterial}>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Material</label>
          <select
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                           focus:border-blue-500 block w-full p-2.5"
            value={newMaterial.material}
            onChange={(e) => updateMaterial("material", e.target.value)}
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
        {product.materials_needed.map((material) => (
          <div className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200">
            <h2>ID: {material.material}</h2>
            <h2>Quantity: {material.quantity}</h2>
          </div>
        ))}
      </div>

      <form onSubmit={submitProduct} className="w-[100%] p-5 mt-20 flex flex-col items-center">
        <div className="flex w-[100%] justify-between">
          <div className="mb-6 w-[45%]">
            <label className="block mb-2 text-sm font-medium text-gray-900">Product name</label>
            <input
              id="name"
              onChange={(e) => updateProductInfo("product_name", e.target.value)}
              value={product.product_name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6 w-[45%]">
            <label className="block mb-2 text-sm font-medium text-gray-900">Product description</label>
            <textarea
              id="description"
              onChange={(e) => updateProductInfo("product_desc", e.target.value)}
              value={product.product_desc}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          //disabled={isLoading}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                     font-medium rounded-lg text-sm w-[30%] mx-auto mt-[30px] px-5 py-2.5 text-center disabled:grayscale"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
