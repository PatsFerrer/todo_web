import { RegisterForm } from "@/components/auth/register-form";
import { AuthLayout } from "@/components/layouts/auth-layout";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Crie uma conta"
      description="Insira seus dados para criar uma nova conta"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
