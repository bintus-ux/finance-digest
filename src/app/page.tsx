import { getMarketNews } from "@/lib/getMarketNews";
import NewsList from "@/components/News/NewsList";
import { NewsItem } from "@/types/news";

export default async function HomePage() {
  let news: NewsItem[] = [];

  try {
    news = await getMarketNews();
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return (
      <div className="p-4 text-center text-red-500">
        Failed to load market news. Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Finance Digest
        </h1>
        <p className="text-gray-600 mb-8">Latest market news and updates</p>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Market News
          </h2>
          <NewsList news={news} />
        </div>
      </div>
    </div>
  );
}
