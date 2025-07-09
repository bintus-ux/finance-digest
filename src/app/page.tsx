import { getMarketNews } from "@/lib/getMarketNews";
import NewsList from "@/components/News/NewsList";
import { NewsItem } from "@/types/news";

export default async function HomePage() {
  let news: NewsItem[] = [];
  let hasError = false;

  try {
    news = await getMarketNews();
  } catch (error) {
    console.error("Failed to fetch news:", error);
    hasError = true;
  }

  return (
    <div className="min-h-screen bg-[#0E0D13] text-white">
      <header>
        <div className="container mx-auto px-4 py-6 border-b border-gray-400 md:border-b-0">
          <div className="flex justify-center items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="max-w-8xl mx-auto">
          <h2 className="font-['Rubik'] text-[24px] leading-[28px] md:text-[48px] md:leading-[32px] uppercase font-medium mb-4">
            NEWS
          </h2>

          {hasError ? (
            <h4 className="text-white font-['Rubik'] font-medium text-[16px] md:text-[20px] leading-[24px] mt-10">
              Something went wrong. Please try again later.
            </h4>
          ) : (
            <NewsList news={news} />
          )}
        </div>
      </main>
    </div>
  );
}
