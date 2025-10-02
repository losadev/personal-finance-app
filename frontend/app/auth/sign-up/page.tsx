import AuthWrapper from "@/components/AuthWrapper";
import SignUpForm from "@/components/forms/SignUpForm";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <AuthWrapper>
      <SignUpForm />
    </AuthWrapper>
  );
}

export default page;
