import ButtonTerciary from "../ButtonTerciary";

type Props = {
  title: string;
  amount: string;
  color: string;
};

const MiniBillCard = (props: Props) => {
  return (
    <div
      className={`border-l-4 border-l-[${props.color}] rounded-lg bg-[var(--color-beige-100-app)] flex justify-between items-center py-5 px-4`}
    >
      <h1 className="text-preset-4 text-[var(--color-gray-500-app)]">
        {props.title}
      </h1>
      <p className="text-preset-4-bold text-[var(--color-gray-900-app)]">
        {props.amount}
      </p>
    </div>
  );
};

const RecurringBillsCard = () => {
  return (
    <section className="bg-[var(--color-white-app)] py-6 px-5 rounded-lg flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-preset-2">Recurrent Bills</h1>
        <ButtonTerciary text="See details" />
      </div>
      <div className="space-y-3">
        <MiniBillCard
          amount="$190.00"
          color="var(--color-green-app)"
          title="Paid bills"
        />
        <MiniBillCard
          amount="$190.00"
          color="var(--color-green-app)"
          title="Total upcomings"
        />
        <MiniBillCard
          amount="$190.00"
          color="var(--color-green-app)"
          title="Due soon"
        />
      </div>
    </section>
  );
};

export default RecurringBillsCard;
