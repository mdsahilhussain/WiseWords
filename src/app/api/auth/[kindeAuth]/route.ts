import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/dist/server";
import { NextRequest } from "next/server";

export function GET(request: NextRequest, { params }: any) {
  const endpoint = params.kindAuth;
  return handleAuth(request, endpoint);
}
