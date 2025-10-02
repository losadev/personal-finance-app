import AuthWrapper from "@/components/AuthWrapper";
import SignInForm from "@/components/forms/SignInForm";

export default function page() {
  return (
    <div>
      <AuthWrapper>
        <SignInForm />
      </AuthWrapper>
    </div>
  );
}
