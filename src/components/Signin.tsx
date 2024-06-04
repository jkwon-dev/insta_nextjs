"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map((providers) => (
        <ColorButton
          key={providers.id}
          text={`Sign In with ${providers.name}`}
          onClick={() => signIn(providers.id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
}
