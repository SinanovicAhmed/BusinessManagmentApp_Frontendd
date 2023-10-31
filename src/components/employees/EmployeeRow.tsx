import { formatDate } from "../../helpers/formatDate";
import { employee } from "../../services/api/employeeAPI";
import { Link, To } from "react-router-dom";
export const EmployeeRow = (props: employee) => {
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {props.name + " " + props.surname}
      </th>
      <td className="px-6 py-4">{props.adress}</td>
      <td className="px-5 py-4">{props.email_adress}</td>
      <td className="px-4 py-4">{props.contact_num}</td>
      <td className="px-4 py-4">{formatDate(props.employment_date)}</td>
      <td className="px-1.5 py-4">
        {formatDate(props.dismissal_date) === "Jan 1, 1970" ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Working
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Dismissed
          </span>
        )}
      </td>
      <td className="pl-2 py-4">
        <Link
          className="font-medium text-blue-600 hover:underline"
          to={
            {
              pathname: "/managment/employeedetails/" + props._id,
              state: { id: props._id },
            } as To
          }
        >
          Details
        </Link>
      </td>
    </tr>
  );
};
