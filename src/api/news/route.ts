import { NextResponse } from "next/server";
import { API_KEYS, API_URLS } from "@/utils/constants";

export async function GET() {
  try {
    const response = await fetch(
      `${API_URLS.MARKET_NEWS}?category=general&token=${API_KEYS.FINNHUB}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
