const OutputPanel = ({ output }) => {
  return (
    <div className="w-1/3 bg-gray-800 p-4 border-l border-gray-700">
      <h2 className="text-lg font-bold mb-4">Output</h2>
      <div className="bg-gray-900 p-4 rounded-md text-sm text-green-400 overflow-y-auto h-full">
        <pre className="whitespace-pre-wrap">{output.join("")}</pre>
      </div>
    </div>
  );
};

export default OutputPanel;
