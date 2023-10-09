import { useQuery } from "react-query";
import { getSuggestions, getSuggestionsByID } from "../../services/api/suggestionAPI";
import { parseCookie } from "../../helpers/cookieParser";
import SuggestionCard from "./SuggestionCard";
import { Loading } from "../globalUI/Loading";

const SuggestionsContainer = ({ type }: { type: string }) => {
  const parsed_user_data = parseCookie();
  const user_id = parsed_user_data.employee_id;
  const fetchSuggestions = (type: string) => {
    if (type === "user") {
      return useQuery(["suggestions", user_id], () => getSuggestionsByID(user_id));
    } else {
      return useQuery("suggestions", () => getSuggestions());
    }
  };
  const { data, isLoading, isError, error } = fetchSuggestions(type);
  if (isLoading) return <Loading />;

  return (
    <div className="relative overflow-x-auto">
      {data?.map((suggestion) => (
        <SuggestionCard suggestion={suggestion} />
      ))}
    </div>
  );
};

export default SuggestionsContainer;
