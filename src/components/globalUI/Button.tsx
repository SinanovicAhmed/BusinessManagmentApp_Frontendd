interface Props {
  name: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}
export const Button = ({ name, onClick, type, disabled }: Props) => {
  if (disabled) {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled
        className="text-white bg-blue-400 cursor-not-allowed focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        {name}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-white w-[150px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
    >
      {name}
    </button>
  );
};
