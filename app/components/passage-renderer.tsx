"use client";

import { useState } from "react";
import { Passage } from "../types";
import Blank from "./blank";

export default function PassageRenderer({ passage }: { passage: Passage }) {
  // Simple scoring state for future gamification
  const [score, setScore] = useState(0);
  const [openBlankId, setOpenBlankId] = useState<string | null>(null);
  const totalBlanks = Object.keys(passage.blanks).length;

  // Split the text by our markers, e.g., "{1}"
  const parts = passage.text.split(/(\{\d+\})/g);

  const handleSolve = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-visible">
      <div className="bg-slate-50 border-b border-gray-100 p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{passage.title}</h1>
          <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
            {passage.difficulty}
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Score</p>
          <p className="text-xl font-bold text-gray-800">{score} / {totalBlanks}</p>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <p className="text-lg md:text-xl text-gray-700 leading-loose md:leading-loose">
          {parts.map((part, index) => {
            const match = part.match(/^\{(\d+)\}$/);
            if (match) {
              const blankId = match[1];
              const blankData = passage.blanks[blankId];
              
              if (blankData) {
                return (
                  <Blank
                    key={index}
                    data={blankData}
                    isOpen={openBlankId === blankId}
                    onToggle={() =>
                      setOpenBlankId((currentId) =>
                        currentId === blankId ? null : blankId
                      )
                    }
                    onClose={() => setOpenBlankId(null)}
                    onSolve={handleSolve}
                  />
                );
              }
            }
            return <span key={index}>{part}</span>;
          })}
        </p>
      </div>
    </div>
  );
}
