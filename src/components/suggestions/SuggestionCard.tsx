import { useMutation, useQueryClient } from "react-query";
import { ISuggestion } from "../../services/Interfaces/suggestion";
import { AiFillDelete } from "react-icons/ai";
import { deleteSuggestion } from "../../services/api/suggestionAPI";
import { toast } from "react-toastify";
import { parseCookie } from "../../helpers/cookieParser";
import axios from "axios";

const SuggestionCard = ({ suggestion }: { suggestion: ISuggestion }) => {
  const parsed_user_data = parseCookie();
  const user_id = parsed_user_data.employee_id;
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((id: string) => deleteSuggestion(id), {
    onSuccess: () => {
      toast.success("Suggestion successfully deleted");
      queryClient.invalidateQueries(["suggestions", user_id]);
      queryClient.invalidateQueries("suggestions");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const submitDelete = () => {
    mutate(suggestion._id);
  };

  return (
    <div
      className="w-[80] mx-5 my-4 shadow-lg rounded-lg hover:cursor-pointer
                    transition ease-in-out delay-100 hover:bg-slate-200"
    >
      <div className="bg-slate-600 w-full flex justify-between px-2 rounded-t-lg">
        <h2 className="text-[16px] text-white font-bold">
          {suggestion.suggestion_title}
          <span className="text-[15px] pl-10 font-normal">
            suggested by {suggestion?.employee?.email_adress}
          </span>
        </h2>
        <button onClick={submitDelete}>
          <AiFillDelete size={20} />
        </button>
      </div>
      <p className="p-2 text-gray-500">{suggestion.suggestion}</p>
    </div>
  );
};

export default SuggestionCard;
