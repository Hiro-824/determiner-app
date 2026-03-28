import Link from "next/link";
import { passages } from "./lib/passages";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Master English Articles
          </h1>
          <p className="text-lg text-slate-600">
            Practice recognizing when to use <strong className="text-blue-600">a</strong>, <strong className="text-blue-600">the</strong>, <strong className="text-blue-600">some</strong>, or <strong className="text-blue-600">no article</strong>.
          </p>
        </header>

        <div className="grid gap-4">
          {passages.map((passage) => (
            <Link 
              key={passage.id} 
              href={`/passage/${passage.id}`}
              className="group block bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {passage.title}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      {Object.keys(passage.blanks).length} blanks to fill
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                  {passage.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}