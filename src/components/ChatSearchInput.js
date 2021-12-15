import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
function ChatSearchInput() {
  return (
    <div className="relative">
      <input
        className="border w-full bg-blue-100 mt-2 rounded-md pl-8 p-1"
        type={"search"}
        placeholder="Search messages"
      />
      <div className="absolute top-4 left-2 ">
        <BiSearchAlt2 size={18} />
      </div>
    </div>
  );
}

export default ChatSearchInput;
