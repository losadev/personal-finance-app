import Image from "next/image";
import React from "react";

type Props = {
  text: string;
};

const ButtonTerciary = (props: Props) => {
  return (
    <button
      type="button"
      className="flex gap-2 items-center text-preset-4 text-[var(--color-gray-500-app)]"
    >
      {props.text}
      <span>
        <Image
          alt="icon caret right"
          src={"/assets/images/icon-caret-right.svg"}
          height={5}
          width={5}
        />
      </span>
    </button>
  );
};

export default ButtonTerciary;
