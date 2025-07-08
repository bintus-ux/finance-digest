import React from "react";
import { render, screen } from "@testing-library/react";
import NewsCard from "@/components/News/NewsCard";
import "@testing-library/jest-dom";

describe("NewsCard", () => {
  const mockItem = {
    id: 1,
    category: "general",
    datetime: 1620000000,
    headline: "Test Headline",
    image: "https://example.com/image.jpg",
    related: "",
    source: "Test Source",
    summary: "Test summary",
    url: "https://example.com",
  };

  it("renders the news card correctly", () => {
    render(<NewsCard item={mockItem} />);

    expect(screen.getByText(mockItem.headline)).toBeInTheDocument();
    expect(screen.getByText(mockItem.source)).toBeInTheDocument();
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("contains a link to the news URL", () => {
    render(<NewsCard item={mockItem} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockItem.url);
  });
});
