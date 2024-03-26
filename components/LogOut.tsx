'use server';

import { signOut } from "@/auth";
import { HiLogout } from "react-icons/hi";

export const LogOut = () => {
  return (
    <div>
        <form
            action={async () => {
                'use server';
                await signOut();
            }}
            >
            <button className="flex items-center justify-center p-3 font-medium md:flex-none md:justify-start md:p-2 md:px-3">
                <HiLogout className="w-6" />
                <div className="hidden md:block">Cerrar sesión</div>
            </button>
        </form>
    </div>
  )
}
