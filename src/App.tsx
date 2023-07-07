import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Dashboard } from "./pages/Dashboard";
import { Suppliers } from "./pages/Suppliers";
import { Orders } from "./pages/Orders";
import { Materials } from "./pages/Materials";
import { Products } from "./pages/Products";
import { Employees } from "./pages/Employees";
import { EmployeeDetails } from "./pages/EmployeeDetails";
import { SupplierDetails } from "./pages/SupplierDetails";
import { AddEmployee } from "./pages/AddEmployee";
import { AddAccount } from "./pages/AddAccount";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="managment/*" element={<MainPage />}>
          {/*Routes that need sidebar*/}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="supplierdetails/:id" element={<SupplierDetails />} />
          <Route path="orders" element={<Orders />} />
          <Route path="materials" element={<Materials />} />
          <Route path="products" element={<Products />} />
          <Route path="manufacturing" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="employeedetails/:id" element={<EmployeeDetails />} />
          <Route path="createaccount" element={<AddAccount />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
