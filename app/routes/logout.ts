import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logout } from "~/utils/auth.server";

export const action: ActionFunction = async ({ request }) => logout(request);
export const loader: LoaderFunction = async () => redirect("/");

/* 
This route handles two possible actions: GET and POST:

- GET: If a GET request is made the user will be sent to the home page.
- POST: This will trigger the logout function which will remove the user's session.
*/
