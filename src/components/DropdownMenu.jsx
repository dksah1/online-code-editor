const DropdownMenu = ({ language, setLanguage }) => {
  const languages = [
    { name: "javascript" },
    { name: "python" },
    { name: "java" },
    { name: "html" },
    { name: "php" },
    { name: "c++" },
  ];
  return (
    <div className="p-4 bg-gray-800">
      <select
        className="w-full bg-gray-700 text-white py-2 px-4 rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.name} value={lang.name}>
            {lang.name.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
