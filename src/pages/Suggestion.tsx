import SuggestionForm from "../components/forms/SuggestionForm";
import { Header } from "../components/globalUI/Header";
import SuggestionsContainer from "../components/suggestions/SuggestionsContainer";

const Suggestion = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <div className="flex items-center pr-6">
        <Header header="Your suggestions" paragraph="Manage your suggestions - delete old and add new ones" />
      </div>
      <SuggestionForm />
      <SuggestionsContainer type="user" />
    </div>
  );
};

export default Suggestion;
