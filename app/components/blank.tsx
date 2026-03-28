"use client";

import { useState } from "react";
import { Check, X, Info } from "lucide-react";
import { BlankData, DeterminerOption } from "../types";

interface BlankProps {
  data: BlankData;
  onSolve: (isCorrect: boolean) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Blank({ data, onSolve, isOpen, onToggle, onClose }: BlankProps) {
  const [selected, setSelected] = useState<DeterminerOption | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const isAnswered = selected !== null;
  const isCorrect = isAnswered && data.correctAnswers.includes(selected!);

  const handleSelect = (option: DeterminerOption) => {
    setSelected(option);
    onClose();
    setShowExplanation(false);
    onSolve(data.correctAnswers.includes(option));
  };

  return (
    <span className="relative inline-block mx-1">
      {/* The Blank Button */}
      <button
        onClick={onToggle}
        className={`relative z-10 px-3 py-1 min-w-[3rem] text-center font-medium rounded-md border-b-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          !isAnswered
            ? "bg-gray-100 border-gray-400 text-gray-400 hover:bg-gray-200"
            : isCorrect
            ? "bg-green-100 border-green-500 text-green-800"
            : "bg-red-100 border-red-500 text-red-800"
        }`}
      >
        {isAnswered ? selected : "___"}
      </button>

      {/* Immediate Feedback Icons */}
      {isAnswered && (
        <span className="absolute -top-3 -right-2 bg-white rounded-full shadow-sm">
          {isCorrect ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <X className="w-4 h-4 text-red-600" />
          )}
        </span>
      )}

      {/* Explanation Toggle */}
      {isAnswered && data.explanation && (
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 text-blue-500 hover:text-blue-700"
        >
          <Info className="w-4 h-4" />
        </button>
      )}

      {/* Options Dropdown */}
      {isOpen && (
        <span className="absolute top-full left-1/2 z-50 mt-2 flex min-w-[120px] w-max -translate-x-1/2 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          {data.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 text-left hover:bg-blue-50 text-gray-800 border-b last:border-0 transition-colors"
            >
              {option}
            </button>
          ))}
        </span>
      )}

      {/* Explanation Tooltip */}
      {showExplanation && (
        <span className="absolute top-full left-1/2 z-40 mt-6 block w-64 -translate-x-1/2 rounded-lg bg-slate-800 p-3 text-sm text-white shadow-xl">
          <span className="block">{data.explanation}</span>
          <button 
            onClick={() => setShowExplanation(false)}
            className="mt-2 text-blue-300 text-xs font-semibold uppercase tracking-wider"
          >
            Close
          </button>
        </span>
      )}
    </span>
  );
}
