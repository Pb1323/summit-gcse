import { redirect } from "next/navigation";
import { ECONOMICS } from "@/data/economics-notes";

export default function NotesHub() {
  redirect(`/notes/${ECONOMICS.slug}`);
}
