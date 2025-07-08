"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { NewsItem } from "@/types/news";
import { API_KEYS, API_URLS } from "../utils/constants";

export const useMarketNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URLS.MARKET_NEWS, {
          params: {
            category: "general",
            token: API_KEYS.FINNHUB,
          },
        });
        setNews(response.data);
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};
