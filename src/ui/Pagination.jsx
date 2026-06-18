export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center gap-3 mt-10">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded-lg ${
            currentPage === page
              ? "bg-rose-600 text-white"
              : "bg-white border"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}