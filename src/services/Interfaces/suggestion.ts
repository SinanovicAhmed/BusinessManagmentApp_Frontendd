export interface ISuggestion {
  _id: string;
  suggestion_title: string;
  suggestion: string;
  employee: {
    _id: string;
    name: string;
    surname: string;
    contact_num: number;
    adress: string;
    email_adress: string;
    employment_date: string;
    dismissal_date: string;
  };
}

export interface ISuggestionPost {
  employee: string;
  suggestion_title: string;
  suggestion: string;
}
