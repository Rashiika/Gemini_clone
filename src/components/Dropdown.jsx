import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const ModelSelector = ({ selectedModel, setSelectedModel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const models = [
    {
      id: "gemini-1.5-flash",
      name: "2.5 Flash",
      description: "Fast, all-around help",
    },
    {
      id: "gemini-1.5-pro",
      name: "2.5 Pro",
      description: "Reasoning, math & code",
    },
  ];

  return (
    <div className="relative">

      <button
        className="flex items-center justify-between text-sm font-medium text-white bg-[#37393b] rounded-full px-3 py-1 mt-1 hover:bg-[#4a4b4d]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {models.find((m) => m.id === selectedModel)?.name}
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-85 bg-[#2a2a2a] shadow-lg rounded-xl border border-gray-700 p-3 z-10">
          <h4 className="text-md text-gray-400 mb-2 px-1">Choose your model</h4>

          <div className="space-y-0.5">
            {models.map((model) => (
              <div
                key={model.id}
                className="flex items-start justify-between p-0.5 rounded cursor-pointer hover:bg-[#3a3b3d]"
                onClick={() => {
                  setSelectedModel(model.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-white">{model.description}</p>
                  <p className="text-xs text-gray-400">{model.name}</p>
                  
                </div>
                {selectedModel === model.id && (
                    <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                    </div>
                )}

              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                Upgrade to Google AI Pro
              </span>
              <span className="text-xs font-semibold text-white">
                Get our most capable models & features
              </span>
            </div>
            <button className="text-s font-medium bg-gray-700 text-blue-200 px-3 py-1 rounded-2xl hover:bg-gray-600">
              Upgrade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelSelector;
