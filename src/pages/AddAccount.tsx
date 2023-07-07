import { AccountForm } from "../components/forms/AccountForm";
import { Header } from "../components/globalUI/Header";

export const AddAccount = () => {
  return (
    <div className="w-[100%] flex flex-wrap">
      <Header header="Create account" paragraph="Create account for already existing employee" />
      <AccountForm />
    </div>
  );
};
