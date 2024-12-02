"use client";

import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import AddQuoteBubble from "../components/AddQuote";
import { Quote } from "../types/quote";

export default function Citations() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  async function getQuotes() {
    const response = await fetch("http://localhost:8000/api.php");
    const quotes = await response.json();
    setQuotes(quotes);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  // Fonction pour ajouter une citation
  async function handleAddQuote(newQuote: Quote){
    try {
      const response = await fetch("http://localhost:8000/api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuote),
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de la citation");
      }
  
      const result = await response.json();
      console.log("Citation ajoutée avec succès :", result);
      setQuotes((prevQuotes) => [...prevQuotes, newQuote]); // Ajoute la nouvelle citation en bas de la liste
      return result;
    } catch (error) {
      console.error("Erreur :", error);
      throw error;
    }
  };

  return (
    <>
      {/* Titre de la page */}
      <div className="flex flex-col mx-96 mt-10 text-white underline underline-offset-8 decoration-sky-700 font-outline-1 hover:font-outline-2 bg-gray-800 border-sky-800 rounded-lg border-4 border-double shadow-lg shadow-sky-800/100 hover:shadow-sky-900/100 text-center h-auto py-10 m-auto text-6xl hover:bg-gray-900 hover:decoration-sky-800">
        <h1>Inspira 2.0</h1>
      </div>

      {/* Liste des citations */}
      {quotes.map((quote: Quote, index) => (
        <div key={index} className="mx-80 my-12">
          <Card quote={quote} />
        </div>
      ))}

      {/* Bulle pour ajouter une citation */}
      <AddQuoteBubble onAddQuote={handleAddQuote} />
    </>
  );
}
