/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState<any[]>([]);

  // Fetch articles from dev.to API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=marlloncps"
        );
        const data = await response.json();
        setArticles(data.slice(0, 3)); // Pegue apenas os 3 primeiros artigos
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section id="articles" className="w-full py-12 border-t border-[#ffffff10]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-[var(--sec)] mb-4">Artigos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#1414149c] p-6 rounded-lg shadow-md"
            >
              {/* Exibir a imagem de capa do artigo */}
              {article.social_image && (
                <img
                  src={article.social_image}
                  alt={article.title}
                  className="w-full h-64 object-center rounded-lg mb-4"
                />
              )}
              <h3 className="text-lg font-bold text-[var(--white)] mb-4">
                {article.title}
              </h3>
              <p className="text-[var(--white)] mb-4">
                {article.description || "No description available"}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sec)] hover:text-[var(--white)]"
              >
                Ler Mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
