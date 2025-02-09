import { NextResponse } from "next/server";

function cors(request) {
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  if (request.method === "OPTIONS") {
    return new NextResponse(null, { headers, status: 204 });
  }

  return headers;
}
export default cors;
