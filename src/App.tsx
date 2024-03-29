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
import { AddMaterial } from "./pages/AddMaterial";
import { OrderDetails } from "./pages/OrderDetails";
import { AddSupplier } from "./pages/AddSupplier";
import { AddOrder } from "./pages/AddOrder";
import AddProduct from "./pages/AddProduct";
import Suggestion from "./pages/Suggestion";
import Protected from "./components/Protected";
import { parseCookie } from "./helpers/cookieParser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="managment/*" element={<MainPage />}>
          {/*Routes that need sidebar*/}
          <Route
            path="dashboard"
            element={
              <Protected roles={["ADMIN"]}>
                <Dashboard />
              </Protected>
            }
          />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="supplierdetails/:id" element={<SupplierDetails />} />
          <Route path="addsupplier" element={<AddSupplier />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orderdetails/:id" element={<OrderDetails />} />
          <Route path="addorder" element={<AddOrder />} />
          <Route path="materials" element={<Materials />} />
          <Route path="addmaterial" element={<AddMaterial />} />
          <Route path="products" element={<Products />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="employees" element={<Employees />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="employeedetails/:id" element={<EmployeeDetails />} />
          <Route path="createaccount" element={<AddAccount />} />
          <Route path="suggestions" element={<Suggestion />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
