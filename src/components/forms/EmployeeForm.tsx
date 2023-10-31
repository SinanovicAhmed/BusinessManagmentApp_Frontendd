import { useState } from "react";
import { useMutation } from "react-query";
import { addEmployees } from "../../services/api/employeeAPI";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IEmployee {
  name: string;
  surname: string;
  contact_num: string;
  adress: string;
  email_adress: string;
  employment_date: Date;
}
const initialEmployee = {
  name: "",
  surname: "",
  contact_num: "",
  adress: "",
  email_adress: "",
  employment_date: new Date(),
};
export const EmployeeForm = () => {
  const [employee, setEmployee] = useState<IEmployee>(initialEmployee);
  const navigate = useNavigate();

  const { isLoading, isError, error, mutate } = useMutation((employee: IEmployee) => addEmployees(employee), {
    onSuccess: () => {
      setEmployee(initialEmployee);
      toast.success("Employee added successfully");
      navigate(-1);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
  const updateName = (name: string) => {
    setEmployee((prevState) => ({ ...prevState, name: name }));
  };
  const updateSurname = (surname: string) => {
    setEmployee((prevState) => ({ ...prevState, surname: surname }));
  };
  const updateNumber = (number: string) => {
    setEmployee((prevState) => ({ ...prevState, contact_num: number }));
  };
  const updateAdress = (adress: string) => {
    setEmployee((prevState) => ({ ...prevState, adress: adress }));
  };
  const updateEmail = (email: string) => {
    setEmployee((prevState) => ({ ...prevState, email_adress: email }));
  };
  const updateDate = (dateInput: string) => {
    const date = new Date(dateInput);

    setEmployee((prevState) => ({ ...prevState, employment_date: date }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(employee);
      }}
      className="w-[100%] min-h-[80%] p-5 flex flex-col"
    >
      <div className="w-[100%] flex justify-between">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input
            value={employee.name}
            onChange={(e) => updateName(e.target.value)}
            placeholder="eg. John"
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Surname</label>
          <input
            value={employee.surname}
            onChange={(e) => updateSurname(e.target.value)}
            placeholder="eg. Stones"
            type="text"
            id="surname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Contact number</label>
          <input
            value={employee.contact_num}
            onChange={(e) => updateNumber(e.target.value)}
            placeholder="eg. 061835923"
            type="tel"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Adress</label>
          <input
            value={employee.adress}
            onChange={(e) => updateAdress(e.target.value)}
            placeholder="eg. Hamdije Kreševljakovića 3"
            type="text"
            id="adress"
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
            value={employee.email_adress}
            onChange={(e) => updateEmail(e.target.value)}
            placeholder="eg. name_surname@gmail.com"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Employment date</label>
          <input
            onChange={(e) => updateDate(e.target.value)}
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
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
