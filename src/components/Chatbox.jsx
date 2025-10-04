import {Mic, Wrench } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { HiOutlineMicrophone, HiOutlineAdjustments} from "react-icons/hi"; 
import { useState } from "react";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 pb-12">
      <div className="max-w-3xl mx-auto relative border border-gray-600 rounded-3xl bg-zinc-900 flex flex-col px-4 py-1 ">
    
        <TextareaAutosize
            maxRows={6}
            minRows={3}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask Gemini"
            className="w-full bg-transparent text-white outline-none resize-none text-semibold px-4 pt-2 pb-3 placeholder-gray-400"
        />

        <div className="flex items-center justify-between mt-auto px-1 pt-2">
          <div className="flex items-center space-x-3 text-gray-400">
           <span className="text-3xl cursor-pointer hover:text-white transition-colors">+</span>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
              <HiOutlineAdjustments className="h-5 w-5" />
              <span className="text-sm">Tools</span>
            </div>
          </div>

          <button className="text-gray-400 hover:text-white transition-colors">
            <HiOutlineMicrophone className="h-4 w-4 fill-gray-400 hover:fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
