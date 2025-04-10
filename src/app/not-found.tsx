import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex bg-gray-200 h-screen w-screen animate-fade-in">
      <Link href={"/"}>
        <p className="flex h-[100px] w-[400px] gap-2 items-center text-zinc-950 font-semibold text-lg m-4">
          <ArrowLeft /> Back to pokemon page
        </p>
      </Link>
      <div className="flex w-full justify-center items-center">
        <div className="flex gap-4">
          <Image
            src="/pokeball.png"
            alt="Pokeball"
            width={200}
            height={200}
            className="transition-transform duration-300 hover:scale-110"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl mt-8 font-bold transition-transform duration-300 hover:scale-110">
              Sorry the pokemon you are looking for
            </h1>
            <h1 className="text-8xl uppercase text-center transition-transform duration-300 hover:scale-110">
              NOT found
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
