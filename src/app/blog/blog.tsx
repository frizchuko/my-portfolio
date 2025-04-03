'use client'
import { useEffect, useState } from "react";
import { Layout } from "antd";
import { motion } from "framer-motion";


interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const { Content } = Layout;

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
    <Layout className="h-full overflow-y-scroll">
      <Content className="w-full md:p-4 p-0">
        <div className="max-w-4xl mx-auto p-0 mt-14 md:p-6">
          <h1 className="text-2xl font-bold mb-4">
            While you are here, check out the latest happenings in the world of tech
          </h1>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                className="p-4  rounded-lg  bg-white"
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
                <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
                <p className="text-sm">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Read More
                </a>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-4">
            <button 
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))} 
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Previous
            </button>
            <button 
              onClick={() => setPage((prev) => prev + 1)} 
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
