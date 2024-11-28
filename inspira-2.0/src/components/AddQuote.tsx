import React, { useState } from "react";

const AddQuoteBubble = ({ onAddQuote }: { onAddQuote: (quote: { quote: string; author: string }) => void }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quote && author) {
      onAddQuote({ quote, author });
      setQuote("");
      setAuthor("");
      setModalOpen(false);
    }
  };

  return (
    <>
      {/* Bulle en bas à droite */}
      <button
        className="fixed bottom-4 right-4 w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-3xl font-bold hover:bg-blue-700 hover:scale-110 transition-transform duration-300"
        onClick={() => setModalOpen(true)}
        >
        +
        </button>


      {/* Modal pour ajouter une citation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50" onClick={(e) => {
            // Ferme la modal si le clic est sur l'arrière-plan (et non sur le contenu)
            if (e.target === e.currentTarget) {
              setModalOpen(false);
            }
          }}>
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Ajouter une citation</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="quote" className="block text-sm font-medium text-gray-700">
                  Citation
                </label>
                <textarea
                  id="quote"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                  Auteur
                </label>
                <input
                  id="author"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddQuoteBubble;
