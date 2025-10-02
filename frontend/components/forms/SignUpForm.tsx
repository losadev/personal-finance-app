"use client";
import Input from "@/components/Input";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormValues, signUpSchema } from "@/lib/schemas/auth/sign-up";

function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="bg-[#ffffff] rounded-lg flex flex-col w-full py-6 px-5 gap-8 sm:max-w-xl">
        <h1 className="text-[32px] leading-1.2 tracking-normal font-bold">
          Sign up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            type="name"
            name="name"
            label="Name"
            control={control}
            error={errors.name}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            control={control}
            error={errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            control={control}
            error={errors.password}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm password"
            control={control}
            error={errors.confirmPassword}
          />
          <button
            type="submit"
            className="py-5 text-center bg-[#201F24] w-full text-[#ffffff] rounded-lg text-[14px] leading-1.5 font-bold tracking-normal"
          >
            Login
          </button>
        </form>

        <p className="w-full text-center leading-1.5 tracking-normal text-[14px] text-[#696868]">
          Already have an account?{" "}
          <a
            href="/auth/sign-in"
            className="font-bold underline text-[#201F24]"
          >
            Login
          </a>
        </p>
      </div>
    </>
  );
}

export default SignUpForm;
