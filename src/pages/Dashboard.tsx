import DashboardInfo from "../components/dashboard/DashboardInfo";
import { Header } from "../components/globalUI/Header";
import SuggestionsContainer from "../components/suggestions/SuggestionsContainer";

export const Dashboard = () => {
  return (
    <div className="w-[100%] flex flex-col">
      <Header
        header="Dashboard"
        paragraph="Track your orders, employees, suggestions and products at one place."
      />
      <DashboardInfo />
      <SuggestionsContainer type="dashboard" />
    </div>
  );
};
