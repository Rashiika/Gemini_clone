import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import './Dropdown.css'; 

const ModelSelector = ({ selectedModel, setSelectedModel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const models = [
    { id: "gemini-1.5-flash", name: "Fast, all-around help", description: "2.5 Flash" },
    { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", description: "Reasoning, math and code" },
  ];

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        {models.find(m => m.id === selectedModel)?.name}
        <ChevronDown className="chevron-icon" />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-heading">Choose your model</div>
          {models.map(model => (
            <div 
              key={model.id} 
              className={`dropdown-item ${selectedModel === model.id ? 'selected' : ''}`}
              onClick={() => { setSelectedModel(model.id); setIsOpen(false); }}
            >
              <div className="item-text">
                <span className="item-name">{model.name}</span>
                <span className="item-desc">{model.description}</span>
              </div>
              {selectedModel === model.id && <Check className="check-icon" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelSelector;
