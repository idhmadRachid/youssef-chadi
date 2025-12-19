import { odooClient } from "@/services/odooClient";
import type { User } from "@/types/user";

export async function login(email: string, password: string): Promise<{ user: User }> {
  const { data } = await odooClient.post("/auth/login", { email, password });
  return data;
}

// Optional logout endpoint (recommended to implement in Odoo or via Next route handler)
export async function logout(): Promise<{ status: string }> {
  const { data } = await odooClient.post("/auth/logout");
  return data;
}
