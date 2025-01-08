import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="flex-grow bg-gray-800 p-4 border-r border-gray-700">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// write code here"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;
