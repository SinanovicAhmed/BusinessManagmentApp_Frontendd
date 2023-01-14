interface Props {
  header: string;
  paragraph: string;
}

export const Header = ({ header, paragraph }: Props) => {
  return (
    <div className="w-[100%] flex flex-col p-5">
      <h2 className="text-3xl text-gray-700 font-extrabold">{header}</h2>
      <p className="my-4 text-lg text-gray-500">{paragraph}</p>
    </div>
  );
};
