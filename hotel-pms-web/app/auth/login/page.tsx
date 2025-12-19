"use client";

import { login } from "@/services/auth";

export default function LoginPage() {
  const submit = async (e: any) => {
    e.preventDefault();
    await login(e.target.email.value, e.target.password.value);
    window.location.href = "/account";
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-20">
      <input name="email" placeholder="Email" className="border p-2 w-full" />
      <input name="password" type="password" className="border p-2 w-full mt-2" />
      <button className="bg-black text-white px-4 py-2 mt-4 w-full">
        Login
      </button>
    </form>
  );
}
