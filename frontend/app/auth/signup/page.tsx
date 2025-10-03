import AuthWrapper from "@/components/AuthWrapper";
import SignUpForm from "@/components/forms/SignUpForm";

function page() {
  return (
    <AuthWrapper>
      <SignUpForm />
    </AuthWrapper>
  );
}

export default page;
