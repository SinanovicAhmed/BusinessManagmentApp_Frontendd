import axios from "axios";
import { ISuggestion, ISuggestionPost } from "../Interfaces/suggestion";

const config = {
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Content-Type": "application/json",
  },
};

export const getSuggestionsByID = async (employee_id: string): Promise<ISuggestion[]> => {
  const response = await axios.get(
    "http://localhost:3000/api/suggestion/get-suggestion-byID/" + employee_id,
    config
  );
  return response.data.suggestions;
};

export const getSuggestions = async (): Promise<ISuggestion[]> => {
  const response = await axios.get("http://localhost:3000/api/suggestion/get-all", config);
  return response.data.suggestions;
};

export const addSuggestion = async (suggestion: ISuggestionPost): Promise<string> => {
  const response = await axios.post(
    "http://localhost:3000/api/suggestion/add-suggestion",
    suggestion,
    config
  );
  return response.data.message;
};

export const deleteSuggestion = async (id: string): Promise<string> => {
  const response = await axios.delete(
    "http://localhost:3000/api/suggestion/delete-suggestion-byID/" + id,
    config
  );
  return response.data.message;
};
