"use client";
import Input from "@/components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormValues, signInSchema } from "@/lib/schemas/auth/sign-in";
import { useRouter } from "next/navigation";

function SignInForm() {
  const router = useRouter(); // este se utiliza en componente cliente, redirect es para server components
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data
      }),
      cache: "no-store",
      credentials: "include",
    })

    if(res.ok) {
      router.push('/dashboard');
    }
    
    const responseData = await res.json();

    return responseData.user;
  
  };
  
  return (
    <>
      <div className="bg-[#ffffff] rounded-lg flex flex-col w-full py-6 px-5 gap-8 sm:max-w-xl">
        <h1 className="text-[32px] leading-1.2 tracking-normal font-bold">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          <button
            type="submit"
            className="py-5 text-center bg-[#201F24] hover:bg-[#696868] cursor-pointer w-full text-[#ffffff] rounded-lg text-[14px] leading-1.5 font-bold tracking-normal"
          >
            Login
          </button>
        </form>

        <p className="w-full text-center leading-1.5 tracking-normal text-[14px] text-[#696868]">
          Need create an account?{" "}
          <a
            href="/auth/signup"
            className="font-bold underline text-[#201F24]"
          >
            Sign up
          </a>
        </p>
      </div>
    </>
  );
}

export default SignInForm;
