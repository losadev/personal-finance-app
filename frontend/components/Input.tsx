import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  label: string;
  type: string;
  name: string;
  control?: Control<any>
  error?: FieldError
}

const Input = ({label,name,type, control, error}: Props) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[12px] font-bold leading-1.5 tracking-normal text-[#696868]"
      >
        {label}
      </label>
      <div className="border border-[#696868] px-5 py-2 rounded-lg">
        <Controller name={name} control={control} render={({field}) => <input type={type} {...field} id={name} className="w-full" />}/>
      </div>
      <span className="m-1.5">{error && error?.message}</span>
    </fieldset>
  );
};

export default Input;
