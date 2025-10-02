"use client";

import Image from "next/image";
import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  label: string;
  type: string;
  name: string;
  control?: Control<any>;
  error?: FieldError;
}

const Input = ({ label, name, type, control, error }: Props) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[12px] font-bold leading-1.5 tracking-normal text-[#696868]"
      >
        {label}
      </label>
      <div className="flex w-full border border-gray-500  px-5 py-2 rounded-lg gap-2">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input type={type} {...field} id={name} className="w-full" />
          )}
        />
        {type === "password" ? (
          <Image
            alt="icon show password"
            src="/assets/images/icon-show-password.svg"
            width={16}
            height={16}
          />
        ) : null}
      </div>
      <span className="m-1.5">{error && error?.message}</span>
    </fieldset>
  );
};

export default Input;
