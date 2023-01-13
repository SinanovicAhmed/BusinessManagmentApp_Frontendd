interface EmployeeRow {
  id: string;
  name: string;
  adress: string;
  email: string;
  account: boolean;
  workStatus: string;
  role: "ADMIN" | "USER";
}

export const EmployeeRow = () => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        e
      </th>
      <td className="px-6 py-4">Sliver sfhafljasn jksnfkjanskjfnkj</td>
      <td className="px-6 py-4">Laptop</td>
      <td className="px-6 py-4">$2999</td>
      <td className="px-4 py-4">$2999</td>
      <td className="px-4 py-4">$2999</td>
      <td className="pl-2 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};
