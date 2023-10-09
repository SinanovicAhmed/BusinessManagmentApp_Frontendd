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
      {data?.length === 0 ? (
        <p className="w-full text-gray-600 text-center pt-5 ">
          You dont have any suggestions. You can add one in form above.
        </p>
      ) : (
        data?.map((suggestion) => <SuggestionCard suggestion={suggestion} key={suggestion._id} />)
      )}
    </div>
  );
};

export default SuggestionsContainer;
