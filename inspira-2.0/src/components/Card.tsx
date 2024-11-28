import React from "react";
import { Quote } from "../types/quote"

const Card = ({ quote }: Quote) => {
    return (
      <div className="col-span-4 md:col-span-1 shadow-md shadow-black rounded-xl transform transition-transform duration-300 hover:scale-105">
        <div className="card shadow-sm bg-white rounded-xl border border-gray-200">
          <div className="card-body p-4">
            <blockquote className="flex flex-col mb-0">
              <p className="text-xl font-medium text-gray-700 italic">
                {quote.quote}
              </p>
              <footer className="blockquote-footer mt-2 text-sm text-gray-500 underline underline-offset-2 text-right">
                {quote.author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  };  
  

export default Card;
