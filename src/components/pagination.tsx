import { PokemonApiResult } from "@/types/type";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function PaginationSection({
  pokemon,
  offset,
  limit,
}: {
  pokemon: PokemonApiResult;
  offset: number;
  limit: number;
}) {
  const totalPages = Math.ceil(pokemon.count / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  // दिखाने के लिए पेज नंबर की रेंज तय करें (उदाहरण: 5 पेज दिखाएँ)
  const maxPagesToShow = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  return (
    <Pagination className="my-4">
      <PaginationContent>
        {pokemon.previous !== null && (
          <PaginationItem>
            <PaginationPrevious
              href={`?offset=${offset - limit}&limit=${limit}`}
              aria-disabled={!pokemon.previous}
            />
          </PaginationItem>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const page = startPage + index;
          const isActive = page === currentPage;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?offset=${(page - 1) * limit}&limit=${limit}`}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {endPage < totalPages && (
          <PaginationItem>
            <PaginationLink href={`?offset=${endPage * limit}&limit=${limit}`}>
              ...
            </PaginationLink>
          </PaginationItem>
        )}

        {pokemon.next && (
          <PaginationItem>
            <PaginationNext
              href={`?offset=${offset + limit}&limit=${limit}`}
              aria-disabled={!pokemon.next}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
