'use client'
import { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(`/api/news?page=${page}`);
      const data = await response.json();
      setArticles(data.articles);
    }
    fetchNews();
  }, [page]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tech News</h1>
      {articles.map((article, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow">
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded" />}
          <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
          <p className="text-sm">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Read More
          </a>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} className="px-4 py-2 bg-gray-300 rounded">
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)} className="px-4 py-2 bg-gray-300 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
