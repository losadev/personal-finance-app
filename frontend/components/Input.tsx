import React from "react";

interface Props {
  label: string;
  type: string;
  name: string;
}

const Input = ({label,name,type}: Props) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <label
        htmlFor="email"
        className="text-[12px] font-bold leading-1.5 tracking-normal text-[#696868]"
      >
        Name
      </label>
      <div className="border border-[#696868] px-5 py-2 rounded-lg">
        <input type="email" name="email" id="email" className="w-full" />
      </div>
    </fieldset>
  );
};

export default Input;
