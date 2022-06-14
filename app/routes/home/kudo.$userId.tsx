import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

/* 
This code will: 
  - It pulls the params field from the loader function.
  - It then grabs the userId value.
  - Finally, it retrieves the data from the loader function using Remix's userLoaderData hook and renders the userId onto the screen.
*/
export const loader: LoaderFunction = async ({ request, params }) => {
  const { userId } = params;
  return json({ userId });
};

export default function KudoModal() {
  const data = useLoaderData();
  return <h2> User: {data.userId} </h2>;
}
