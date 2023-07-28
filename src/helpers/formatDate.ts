export const formatDate = (input_date: Date) => {
  const date = new Date(input_date);
  const formatedDate = date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatedDate;
};
