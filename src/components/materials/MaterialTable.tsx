import { useQuery } from "react-query";
import { getMaterials } from "../../services/api/materialAPI";
import { useState } from "react";
import { MaterialRow } from "./MaterialRow";
import { Loading } from "../globalUI/Loading";

export const MaterialTable = () => {
  const { data, isLoading, error } = useQuery("materials", getMaterials);

  if (isLoading) return <Loading />;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
          <tr>
            <th scope="col" className="px-5 py-3">
              Material Name
            </th>
            <th scope="col" className="px-3 py-3">
              Quantity
            </th>
            <th scope="col" className="px-3 py-3">
              min quantity
            </th>
            <th scope="col" className="px-1 py-3">
              Unit of measure
            </th>
            <th scope="col" className="px-3 py-3">
              Status
            </th>

            <th scope="col" className="pl-2 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((material) => (
            <MaterialRow material={material} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
