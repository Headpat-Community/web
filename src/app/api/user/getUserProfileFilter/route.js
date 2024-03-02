import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request) {
  try {
    // Use the URL object to parse and get query parameters
    const requestURL = new URL(request.url);
    const queryParams = requestURL.search;

    // Construct the URL for the external fetch
    const fetchURL = `${process.env.NEXT_PUBLIC_API_URL}/v1/databases/65527f2aafa5338cdb57/collections/65564fa28d1942747a72/documents${queryParams}`;

    let response;
    try {
      response = await fetch(fetchURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Appwrite-Project": `${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`,
          "X-Appwrite-Response-Format": "1.4.0",
        },
      });
    } catch (error) {
      return NextResponse.json(
        { error: "Error fetching data" },
        { status: 500 }
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch data. Status: ${response.status}. Message: ${errorText}`
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
