import axios from "axios";
import { API_KEYS, API_URLS } from "@/utils/constants";

export async function getMarketNews() {
  const response = await axios.get(API_URLS.MARKET_NEWS, {
    params: {
      category: "general",
      token: API_KEYS.FINNHUB,
    },
  });

  return response.data;
}
