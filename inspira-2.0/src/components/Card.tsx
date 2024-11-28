import React from "react";
import { Quote } from "../types/quote"

const Card = ({ quote }: Quote) => {
    return (
      <div className="col-span-4 md:col-span-1 shadow-lg shadow-sky-800 rounded-xl transform transition-transform duration-300 hover:scale-105">
        <div className="card shadow-md bg-gray-700 rounded-xl border-4 border-sky-800 border-double">
          <div className="card-body p-4">
            <blockquote className="flex flex-col mb-0">
              <p className="text-xl font-medium text-white italic">
                {quote.quote}
              </p>
              <footer className="blockquote-footer mt-2 text-sm text-sky-600 underline underline-offset-2 text-right">
                {quote.author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  };  
  

export default Card;
