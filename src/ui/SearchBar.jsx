export default function SearchBar({ search, setSearch, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg px-4 py-3 outline-none focus:border-rose-500"
    />
  );
}
