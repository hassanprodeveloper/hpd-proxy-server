import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const headers = new Headers(req.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Add preflight handling
    if (req.method === "OPTIONS") {
      return new NextResponse(null, { status: 204, headers });
    }

    const { endpoint, method, body } = await req.json();

    if (req.headers.has("authorization")) {
      headers.set("Authorization", req.headers.get("authorization")!);
    }

    const response = await fetch(endpoint, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined, // Convert body to JSON string if it exists
    });

    // Clone the response headers
    const responseHeaders = new Headers(response.headers);

    // Check if response is JSON or not
    const contentType = responseHeaders.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    const data = isJson ? await response.json() : await response.text();

    // Return the exact same status, headers, and body as received from the endpoint
    return new NextResponse(isJson ? JSON.stringify(data) : data, {
      status: response.status,
      headers: responseHeaders, // Forward all the response headers
    });
  } catch (error) {
    // If an error occurs, catch it and return a response similar to the endpoint's error response
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
