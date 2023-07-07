import axios from "axios";

interface employee {
  _id: string;
  name: string;
  surname: string;
  contact_num: number;
  adress: string;
  email_adress: string;
  employment_date: string;
  dismissal_date: string;
}
interface employeePost {
  name: string;
  surname: string;
  contact_num: string;
  adress: string;
  email_adress: string;
  employment_date: string;
}
interface user {
  _id: string;
  employee_id: string;
  username: string;
  password: string;
  role: "ADMIN" | "USER";
}
interface fullEmployee {
  employee: employee;
  user: user | null;
}
export const getEmployees = async (): Promise<employee[]> => {
  const response = await axios.get("http://localhost:3000/api/employee/getAll", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data?.employees;
};
export const getEmployeeDetails = async (id: any): Promise<fullEmployee> => {
  const response = await axios.get("http://localhost:3000/api/employee/employee-details/" + id, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const addEmployees = async (employee: employeePost): Promise<string> => {
  const response = await axios.post("http://localhost:3000/api/employee//add-employee", employee, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data?.message;
};

export type { employee, user, fullEmployee };
