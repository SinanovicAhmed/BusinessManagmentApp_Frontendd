import { EmployeeRow } from "./EmployeeRow";

export const EmployeeTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Adress
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Account
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
            <th scope="col" className="px-4 py-3">
              Role
            </th>
            <th scope="col" className="pl-2 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
          <EmployeeRow />
        </tbody>
      </table>
    </div>
  );
};
