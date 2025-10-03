type Props = {
  title: string;
  amount: string;
  className: string;
};

const StatCard = (props: Props) => {
  return (
    <section
      className={`p-5 rounded-lg flex flex-col gap-3 text-[#ffffff] ${props.className}`}
    >
      <span className="text-preset-4">{props.title}</span>
      <span className="text-preset-1">{props.amount}</span>
    </section>
  );
};

export default StatCard;
