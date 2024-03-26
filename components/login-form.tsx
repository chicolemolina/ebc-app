'use client';
 import { 
        
        HiMiniUser, 
        HiMiniLockClosed, 
        HiMiniChevronRight
    } from "react-icons/hi2";

import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
 
export default function LoginForm() {

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const InputForm="peer block w-full rounded-sm border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";
  const IconForm="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900";
  const LaberForm="mb-3 mt-5 block text-md font-medium text-gray-900"
 
  return (

    
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-center text-1">
          Por favor inicie sesión.
        </h1>
        <div className="w-full">
          <div>
            <label
              className={LaberForm}
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className={InputForm}
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <HiMiniUser className={IconForm} />
            </div>
          </div>
          <div className="mt-4">
            <label
              className={LaberForm}
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                className={InputForm}
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <HiMiniLockClosed  className={IconForm} />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
 
function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button className="mt-4 w-full rounded-sm bg-[#002432] hover:bg-[#d0a53d]" aria-disabled={pending}>
      Iniciar sesión <HiMiniChevronRight className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}