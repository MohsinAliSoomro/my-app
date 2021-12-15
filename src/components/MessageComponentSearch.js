import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
function MessageComponentSearch({ modalChat }) {
  return (
    <div className="fixed right-0 bottom-0 border">
      <div className="flex justify-between w-72 p-2">
        <div className="flex">
          <img
            className="rounded-full object-cover w-8 h-8"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="user profile pic"
          />
          <span className="ml-4 mt-1">Messaging</span>
        </div>
        <div className="flex">
          <div className="p-2">
            <HiOutlineDotsHorizontal size={16} />
          </div>
          <div className="p-2">
            <FaEdit size={16} />
          </div>
          <div className="p-2 cursor-pointer" onClick={modalChat}>
            <IoIosArrowUp size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageComponentSearch;
