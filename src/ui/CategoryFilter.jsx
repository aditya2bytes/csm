export default function CategoryFilter({ categories, category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded-lg px-4 py-3"
    >
      <option value="">All Categories</option>

      {categories.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
