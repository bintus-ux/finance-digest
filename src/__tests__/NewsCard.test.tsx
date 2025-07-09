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

  it("renders headline and source", () => {
    render(<NewsCard item={mockItem} />);

    const headlines = screen.getAllByText(mockItem.headline);
    expect(headlines.length).toBeGreaterThan(0);

    const sources = screen.getAllByText(mockItem.source);
    expect(sources.length).toBeGreaterThan(0);

    expect(screen.getAllByText("03 May 2021").length).toBeGreaterThan(0);
  });

  it("renders images with correct alt text", () => {
    render(<NewsCard item={mockItem} />);
    const images = screen.getAllByAltText(
      mockItem.headline
    ) as HTMLImageElement[];
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toBeInTheDocument();
      expect(img.src).toBe(mockItem.image);
    });
  });

  it("contains a valid link to the news URL", () => {
    render(<NewsCard item={mockItem} />);
    const links = screen.getAllByRole("link");
    const match = links.find(
      (link) => link.getAttribute("href") === mockItem.url
    );
    expect(match).toBeInTheDocument();
    expect(match).toHaveAttribute("target", "_blank");
  });
});
