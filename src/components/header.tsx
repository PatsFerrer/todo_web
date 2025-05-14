"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ROUTES, MESSAGES } from "@/constants";
import { useAuth } from "@/hooks/use-auth";
import { AppLogo } from "@/components/ui/app-logo";

export function Header() {
  const { setTheme, theme } = useTheme();
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success(MESSAGES.LOGOUT_SUCCESS, {
      description: MESSAGES.LOGOUT_SUCCESS_DESCRIPTION,
    });
    router.push(ROUTES.LOGIN);
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href={ROUTES.TODOS} className="flex items-center gap-2">
          <AppLogo />
          <span className="text-xl font-bold">TaskFlow</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="cursor-pointer"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            aria-label="Logout"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
