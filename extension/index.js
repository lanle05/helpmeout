import Image from "next/image";
import { PopupModal } from "@/extension/extension_modal";

export default function Home() {
  return (
    <main className="w-ful flex justify-center p-10">
      <PopupModal />
    </main>
  );
}
