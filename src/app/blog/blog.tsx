'use client';

import { useEffect, useState } from "react";
import { Layout, Input, Button, Skeleton } from "antd";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github.css';

import techArticles from "./articles";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const { Content } = Layout;
const { TextArea } = Input;

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [articleIndex, setArticleIndex] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  
  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const response = await fetch(`/api/news?page=${page}`);
        const data = await response.json();
  
        if (!response.ok) throw new Error(data.error || "Failed to fetch news");
  
        setArticles(data.articles);
        setError("");
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Something went wrong fetching news.");
        } else {
          setError("Something went wrong fetching news.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [page]);
  

  
  useEffect(() => {
    const startDateKey = "blogStartDate";
    const storedDate = localStorage.getItem(startDateKey);
    const startDate = storedDate ? new Date(storedDate) : new Date();
    const now = new Date();

    if (!storedDate) {
      localStorage.setItem(startDateKey, now.toISOString());
    }

    const diffInDays = Math.floor(
      (now.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)
    );
    setArticleIndex(diffInDays % techArticles.length);
  }, []);

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    setComments((prev) => [...prev, newComment]);
    setNewComment("");
  };

  const currentArticle = techArticles[articleIndex];

  return (
    <Layout className="h-full overflow-y-scroll">
      <Content className="w-full md:p-4 p-0">
        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 md:p-6">

          {/* Center column - Blog Article */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <motion.div
              key={currentArticle.id}
              className="bg-white p-6 rounded-lg shadow w-full max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-2">{currentArticle.title}</h2>
              <p className="text-sm text-gray-500 mb-4">By {currentArticle.author}</p>
              <div className="prose max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {currentArticle.content}
                </ReactMarkdown>
              </div>
            </motion.div>

            {/* Comments Section */}
            <div className="w-full max-w-2xl mt-6">
              <h3 className="text-lg font-semibold mb-2">Comments</h3>
              <TextArea
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment..."
              />
              <Button
                onClick={handleCommentSubmit}
                type="primary"
                className="mt-2"
              >
                Post Comment
              </Button>

              <div className="mt-4 space-y-3">
                {comments.map((comment, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 p-3 rounded"
                  >
                    {comment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - News Section */}
          <div>
            <h1 className="text-lg font-bold mb-4">Latest Tech News</h1>

            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton active key={i} paragraph={{ rows: 3 }} />
                ))}
              </div>
            ) : error ? (
              <div className="bg-red-100 text-red-700 p-4 rounded">
                <strong className="block font-bold mb-1">Error Loading News:</strong>
                <span>{error}</span>
              </div>
            ) : (
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-white shadow"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-40 object-cover rounded"
                      />
                    )}
                    <h2 className="text-md font-semibold mt-2">{article.title}</h2>
                    <p className="text-sm">{article.description}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Read More
                    </a>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </Content>
    </Layout>
  );
}
