import Link from "next/link";
import { ROUTES } from "@/constants";
import { AppLogo } from "../ui/app-logo";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex h-16 items-center border-b px-4 md:px-6">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <AppLogo />
          <span className="text-xl font-bold">TaskFlow</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center py-10">
        <div className="mx-auto w-full max-w-md space-y-6 px-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
