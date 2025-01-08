const InputBox = ({ input, setInput }) => {
  return (
    <div className="flex justify-end mb-2 mr-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-1/3 p-2 bg-gray-900 rounded-md text-white text-sm resize-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="2"
        placeholder="Optional program input..."
      ></textarea>
    </div>
  );
};

export default InputBox;
