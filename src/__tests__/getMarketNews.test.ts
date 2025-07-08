import axios from "axios";
import { getMarketNews } from "@/lib/getMarketNews";
import { API_KEYS, API_URLS } from "@/utils/constants";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getMarketNews", () => {
  it("fetches market news with correct parameters and returns data", async () => {
    const mockData = [{ headline: "Stock Market Up" }];
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getMarketNews();

    expect(mockedAxios.get).toHaveBeenCalledWith(API_URLS.MARKET_NEWS, {
      params: {
        category: "general",
        token: API_KEYS.FINNHUB,
      },
    });

    expect(result).toEqual(mockData);
  });

  it("throws an error if axios call fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API failed"));

    await expect(getMarketNews()).rejects.toThrow("API failed");
  });
});
