import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUserById } from "~/utils/user.server";
import { Portal } from "~/components/portal";

export const loader: LoaderFunction = async ({ request, params }) => {
  const { userId } = params;

  if (typeof userId !== "string") {
    return redirect("/home");
  }

  const recipient = await getUserById(userId);
  return json({ recipient });
};

export default function KudoModal() {
  const { recipient } = useLoaderData();
  return <Portal wrapperId="kudo-modal">{/* ... */}</Portal>;
}
