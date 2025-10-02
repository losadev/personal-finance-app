"use client"
import Input from "@/components/Input";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { SignInFormValues, signInSchema } from "@/lib/schemas/auth/sign-in";

function SignInForm() {
    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit:SubmitHandler<SignInFormValues> = (data) => {
        console.log(data)
    }
  return (
    <div className="min-h-screen bg-[#F2F3F7] grid grid-rows-2">
      <nav className="bg-[#201F24] rounded-b-lg flex justify-center px-10 py-6 row-end-1">
        <Image
          alt="App logo"
          className="w-[121px] h-[22px]"
          src={"/assets/images/logo-large.svg"}
          height={100}
          width={300}
          aria-label="App logo"
        />
      </nav>
      <div className=" rounded-lg row-start-1 row-end-3 flex items-center justify-center px-4">
        <div className="bg-[#ffffff] rounded-lg flex flex-col w-full py-6 px-5 gap-8 sm:max-w-xl">
          <h1 className="text-[32px] leading-1.2 tracking-normal font-bold">
            Login
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input type="email" name="email" label="Email" control={control} error={errors.email}/>
            <Input type="password" name="password" label="Password" control={control} error={errors.password}/>
            <button
              type="submit"
              className="py-5 text-center bg-[#201F24] w-full text-[#ffffff] rounded-lg text-[14px] leading-1.5 font-bold tracking-normal"
            >
              Login
            </button>
          </form>

          <p className="w-full text-center leading-1.5 tracking-normal text-[14px] text-[#696868]">
            Need create an account?{" "}
            <a
              href="/auth/sign-up"
              className="font-bold underline text-[#201F24]"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
