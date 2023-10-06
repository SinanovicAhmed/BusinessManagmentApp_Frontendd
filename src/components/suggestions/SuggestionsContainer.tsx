import { useQuery } from "react-query";
import { getSuggestionsByID } from "../../services/api/suggestionAPI";
import { parseCookie } from "../../helpers/cookieParser";
import SuggestionCard from "./SuggestionCard";
import { Loading } from "../globalUI/Loading";

const SuggestionsContainer = () => {
  const parsed_user_data = parseCookie();
  const user_id = parsed_user_data.employee_id;
  const { data, isLoading, isError, error } = useQuery(["suggestions", user_id], () =>
    getSuggestionsByID(user_id)
  );
  if (isLoading) return <Loading />;
  console.log(data, user_id);
  return (
    <div className="relative overflow-x-auto">
      {data?.map((suggestion) => (
        <SuggestionCard suggestion={suggestion} />
      ))}
    </div>
  );
};

export default SuggestionsContainer;
