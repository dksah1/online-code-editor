import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import CodeEditor from "./components/CodeEditor";
import OutputPanel from "./components/OutputPanel";
import SideNav from "./components/SideNav";

const wsEndpoint = import.meta.env.VITE_WS_ENDPOINT;

const App = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const { sendJsonMessage, lastMessage } = useWebSocket(wsEndpoint, {
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data);
      if (
        data.type === "stdout" ||
        data.type === "error" ||
        data.type === "stderr"
      ) {
        setOutput((prev) => [...prev, data.data]);
      }

      if (data.type === "stop") {
        setIsRunning(false);
      }
    }
  }, [lastMessage]);

  const handleRun = () => {
    setOutput([]);
    setIsRunning(true);
    sendJsonMessage({
      command: "run",
      code,
      language,
      input,
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    sendJsonMessage({ command: "stop" });
  };

  const handleClearConsole = () => {
    setOutput([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <SideNav language={language} setLanguage={setLanguage} />

      <div className="flex-grow flex flex-col">
        <header className="flex items-center justify-between p-4 bg-gray-800">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
            <option value="php">PHP</option>
            <option value="c++">C++</option>
          </select>
          <h1 className="text-lg font-bold mb-4 uppercase">
            Skill Shikshya Editor
          </h1>

          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded transition ${
                isRunning
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={handleRun}
              disabled={isRunning}
            >
              Run
            </button>
            <button
              className={`px-4 py-2 rounded transition ${
                isRunning
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
              onClick={handleStop}
              disabled={!isRunning}
            >
              Stop
            </button>
            <button
              className="px-4 py-2 rounded bg-yellow-600 hover:bg-yellow-700 transition"
              onClick={handleClearConsole}
            >
              Clear
            </button>
          </div>
        </header>

        <div className="flex flex-grow overflow-hidden ">
          <div className="flex flex-grow flex-col">
            <div className="flex flex-grow">
              <CodeEditor code={code} setCode={setCode} />
              <OutputPanel output={output} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
