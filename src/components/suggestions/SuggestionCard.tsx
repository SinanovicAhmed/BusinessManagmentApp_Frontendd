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
      className="w-[80] mx-5 my-4 shadow-lg border-2 border-[#e8e8e8] rounded-md hover:cursor-pointer
                    transition ease-in-out delay-100 hover:bg-slate-100"
    >
      <div className="w-full flex justify-between px-2 rounded-t-lg border-b-2 border-[#e8e8e8]">
        <h2 className="text-[15px] font-bold w-full flex justify-between">
          {suggestion.suggestion_title}
          <span className="text-[13px] pl-10 font-normal w-[25%]">
            suggested by {suggestion?.employee?.email_adress}
          </span>
        </h2>
        <button onClick={submitDelete}>
          <AiFillDelete size={20} />
        </button>
      </div>
      <p className="p-2 text-[14px] text-gray-500">{suggestion.suggestion}</p>
    </div>
  );
};

export default SuggestionCard;
