type Props = {
  title: string;
  amount: string;
  color: string;
};

const MiniStatCard = (props: Props) => {
  return (
    <div className="flex gap-6">
      <span className={`border-2 ${props.color} rounded-full`}></span>
      <div className="flex flex-col">
        <h1 className="text-preset-5 text-[var(--color-gray-500-app)]">
          {props.title}
        </h1>
        <span className="text-preset-4-bold">{props.amount}</span>
      </div>
    </div>
  );
};

export default MiniStatCard;
