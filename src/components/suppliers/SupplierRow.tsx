import { Link, To } from "react-router-dom";
import { ISupplier } from "../../services/Interfaces/supplier";

export const SupplierRow = (props: ISupplier) => {
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {props.supplier_name}
      </th>
      <td className="px-4 py-4">{props.email_adress}</td>
      <td className="px-4 py-4">{props.UID}</td>
      <td className="px-4 py-4">{props.VAT}</td>
      <td className="px-2 py-4">{props.phone_number}</td>
      <td className="px-2 py-4">{props.contact_person}</td>
      <td className="pl-2 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          <Link
            to={
              {
                pathname: "/managment/supplierdetails/" + props._id,
                state: { id: props._id },
              } as To
            }
          >
            Details
          </Link>
        </a>
      </td>
    </tr>
  );
};
