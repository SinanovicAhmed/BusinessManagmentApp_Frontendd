import { employee } from "../../services/api/employeeAPI";
import { Link, To } from "react-router-dom";
export const EmployeeRow = (props: employee) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {props.name + " " + props.surname}
      </th>
      <td className="px-6 py-4">{props.adress}</td>
      <td className="px-6 py-4">{props.email_adress}</td>
      <td className="px-6 py-4">{props.contact_num}</td>
      <td className="px-4 py-4">{props.employment_date}</td>
      <td className="px-1.5 py-4">
        {props.dismissal_date === "" ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Working
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Fired
          </span>
        )}
      </td>
      <td className="pl-2 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          <Link
            to={
              {
                pathname: "/managment/employeedetails/" + props._id,
                state: { id: props._id },
              } as To
            }
          >
            Edit
          </Link>
        </a>
      </td>
    </tr>
  );
};
