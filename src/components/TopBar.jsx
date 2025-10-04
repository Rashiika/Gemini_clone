import { useState } from "react";
import ModelSelector from "./Dropdown";

const TopBar = () => {
  const [selectedModel, setSelectedModel] = useState("gemini-1.5-flash");

  return (
    <div className="w-full bg-zinc-900 shadow flex items-center justify-between px-6 py-2">
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-400">Gemini</span>
        <ModelSelector
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium bg-[#37393b] rounded-lg h-9 w-32 text-white hover:bg-gray-600">
          Upgrade
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-700 text-sm">U</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
