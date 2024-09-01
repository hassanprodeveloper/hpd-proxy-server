import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const headers = new Headers(req.headers);

  // Set CORS headers
  headers.set("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your React app's URL
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests (OPTIONS method)
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204, headers });
  }

  try {
    const { endpoint, method, body } = await req.json();

    if (req.headers.has("authorization")) {
      headers.set("Authorization", req.headers.get("authorization")!);
    }

    const response = await fetch(endpoint, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const responseHeaders = new Headers(response.headers);
    const contentType = responseHeaders.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    const data = isJson ? await response.json() : await response.text();

    return new NextResponse(isJson ? JSON.stringify(data) : data, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    if (error instanceof Response) {
      const errorText = await error.text();
      return new NextResponse(errorText, {
        status: error.status,
        headers: error.headers,
      });
    } else {
      return new NextResponse(
        JSON.stringify({ error: "An unexpected error occurred." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
}
