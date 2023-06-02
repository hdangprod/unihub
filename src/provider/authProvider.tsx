"use client";
import React, { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
interface Props {
  children: ReactNode;
}

const AuthProviders = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProviders;
