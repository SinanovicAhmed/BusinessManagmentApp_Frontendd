import { useState } from "react";
import { parseCookie } from "../../helpers/cookieParser";
import { useQueryClient, useMutation } from "react-query";
import { ISuggestionPost } from "../../services/Interfaces/suggestion";
import { addSuggestion } from "../../services/api/suggestionAPI";
import { toast } from "react-toastify";
import axios from "axios";

const initialSuggestion = {
  employe: "",
  suggestion_title: "",
  suggestion: "",
};
const SuggestionForm = () => {
  const parsed_user_data = parseCookie();
  const user_id = parsed_user_data.employee_id;
  const queryClient = useQueryClient();
  const [suggestion, setSuggestion] = useState({
    employee: user_id as string,
    suggestion_title: "",
    suggestion: "",
  });

  const { isLoading, isError, error, mutate } = useMutation(
    (suggestion: ISuggestionPost) => addSuggestion(suggestion),
    {
      onSuccess: () => {
        toast.success("Suggestion successfully added");
        queryClient.invalidateQueries(["suggestions", user_id]);
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.message);
        }
      },
    }
  );
  const updateSuggestion = (property: string, value: string | number) => {
    setSuggestion((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(suggestion);
      }}
      className="w-[100%] p-5 flex flex-col"
    >
      <div className="w-[100%] flex justify-between items-start">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Suggestion Title</label>
          <input
            onChange={(e) => updateSuggestion("suggestion_title", e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                   focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Suggestion</label>
          <textarea
            onChange={(e) => updateSuggestion("suggestion", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                   focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
               font-medium rounded-lg text-sm w-[30%] mx-auto mt-[30px] px-5 py-2.5 text-center disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

export default SuggestionForm;
