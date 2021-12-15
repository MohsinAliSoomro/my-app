import React from "react";
import ChatSearchInput from "./ChatSearchInput";
import Users from "./Users";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function MessageComponent({ modalChat }) {
  return (
    <div className="fixed top-20 overflow-scroll right-0 bottom-0 border">
      <div className="w-72 p-2">
        <div className="flex justify-between border-b">
          <div className="flex">
            <img
              className="rounded-full object-cover w-8 h-9"
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
              <IoIosArrowDown size={16} />
            </div>
          </div>
        </div>
        <ChatSearchInput />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Users />
        ))}
      </div>
    </div>
  );
}

export default MessageComponent;
