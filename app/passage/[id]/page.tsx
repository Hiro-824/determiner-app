import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPassageById } from "@/app/lib/passages";
import PassageRenderer from "@/app/components/passage-renderer";

export default async function PassagePage(props: PageProps<"/passage/[id]">) {
  const { id } = await props.params;
  const passage = getPassageById(id);

  if (!passage) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pt-6 pb-16 md:px-12 md:pt-12 md:pb-24">
      <div className="max-w-3xl mx-auto mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Passages
        </Link>
      </div>
      
      <PassageRenderer passage={passage} />
    </main>
  );
}
