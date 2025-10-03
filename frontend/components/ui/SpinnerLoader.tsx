import { MoonLoader } from "react-spinners";

const SpinnerLoader = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-2 items-center justify-center ">
      <span>{text}</span>
      <MoonLoader loading={true} size={20} color="#ffffff" />
    </div>
  );
};

export default SpinnerLoader;
