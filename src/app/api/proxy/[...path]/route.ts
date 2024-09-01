import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://api-dev.mateslive.com";

export async function GET(req: NextRequest) {
  return handleRequest(req);
}

export async function POST(req: NextRequest) {
  return handleRequest(req);
}

export async function PUT(req: NextRequest) {
  return handleRequest(req);
}

export async function DELETE(req: NextRequest) {
  return handleRequest(req);
}

async function handleRequest(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/proxy/", "");

  // Retrieve query parameters and append them to the URL
  const queryParams = req.nextUrl.search;
  const url = `${API_BASE_URL}/${path}${queryParams}`;

  const method = req.method;
  const body = method !== "GET" ? await req.json() : undefined;

  const headers = new Headers(req.headers);
  headers.set("Content-Type", "application/json");

  if (req.headers.has("authorization")) {
    headers.set("Authorization", req.headers.get("authorization")!);
  }

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();
  return new NextResponse(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
