import { useMutation } from "react-query";
import { ISupplier } from "../services/Interfaces/supplier";
import { useState } from "react";
import { SupplierForm } from "../components/forms/SupplierForm";
import { Header } from "../components/globalUI/Header";

export const AddSupplier = () => {
  return (
    <div className="w-[100%] flex flex-wrap">
      <Header header="Add supplier" paragraph="Add new suppliers" />
      <SupplierForm />
    </div>
  );
};
