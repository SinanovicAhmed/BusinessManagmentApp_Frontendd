import { useState } from "react";
import { useMutation } from "react-query";
import { addEmployees } from "../../services/api/employeeAPI";
interface Iemployee {
  name: string;
  surname: string;
  contact_num: number | null;
  adress: string;
  email_adress: string;
  employment_date: string;
}
export const EmployeeForm = () => {
  const [employee, setEmployee] = useState<Iemployee>({
    name: "",
    surname: "",
    contact_num: null,
    adress: "",
    email_adress: "",
    employment_date: "",
  });
  const { isLoading, isError, error, mutate } = useMutation(
    (employee: Iemployee) => addEmployees(employee),
    {
      onSuccess: () => console.log("added"),
    }
  );
  const updateName = (name: string) => {
    setEmployee((prevState) => ({ ...prevState, name: name }));
  };
  const updateSurname = (surname: string) => {
    setEmployee((prevState) => ({ ...prevState, surname: surname }));
  };
  const updateNumber = (number: number) => {
    setEmployee((prevState) => ({ ...prevState, contact_num: number }));
  };
  const updateAdress = (adress: string) => {
    setEmployee((prevState) => ({ ...prevState, adress: adress }));
  };
  const updateEmail = (email: string) => {
    setEmployee((prevState) => ({ ...prevState, email_adress: email }));
  };
  const updateDate = (date: string) => {
    const datee = new Date(date);
    const newDate = datee.toLocaleDateString();
    setEmployee((prevState) => ({ ...prevState, employment_date: newDate }));
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
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            onChange={(e) => updateName(e.target.value)}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Surname
          </label>
          <input
            onChange={(e) => updateSurname(e.target.value)}
            type="text"
            id="surname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Contact number
          </label>
          <input
            onChange={(e) => updateNumber(parseInt(e.target.value))}
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Adress
          </label>
          <input
            onChange={(e) => updateAdress(e.target.value)}
            type="text"
            id="adress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            onChange={(e) => updateEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Employment date
          </label>
          <input
            onChange={(e) => updateDate(e.target.value)}
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[30%] mx-auto mt-[30px] px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};
