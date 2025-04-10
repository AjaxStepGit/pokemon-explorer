// components/search-input.tsx
"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput({ initialSearch = "" }) {
  const [searchValue, setSearchValue] = useState(initialSearch);
  const router = useRouter();

  const handleSearch = () => {
    if (searchValue.trim()) {
      // Update the URL with the search query
      router.push(`/?search=${encodeURIComponent(searchValue)}`);
    } else {
      // Reset to the default page if search is empty
      router.push("/");
    }
  };

  return (
    <div className="flex items-center border border-gray-200 p-1 rounded-sm bg-white w-[500px] mt-4">
      <Search size={20} className="ml-2 text-gray-400" />
      <input
        type="text"
        className="p-1 pl-2 text-gray-800 rounded-xs focus:outline-none w-full"
        placeholder="Search Pokémon..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="button"
        className="bg-emerald-500 h-full w-[144px] rounded-sm text-white font-medium"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
