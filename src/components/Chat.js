import React, { useRef, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { MdGif } from "react-icons/md";

const messages = [
  {
    message: "This is message",
    user: "you",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "you",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "other",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "you",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "other",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "you",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "you",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "other",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "other",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "you",
    date: "12/12/2012",
  },
  {
    message: "This is message",
    user: "other",
    date: "12/12/2012",
  },
];

function ChatContainer({ modalChat }) {
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messagesData, setMessages] = useState(messages);
  const AddMessages = (event) => {
    event.preventDefault();
    console.log("🚀 ~ file: Chat.js ~ line 70 ~ AddMessages ~ event", event);
    const you = {
      message,
      user: "you",
      date: "12/12/2012",
    };

    setMessages((prev) => [...prev, you]);
    setMessage("");
    scrollToBottom();
  };
  const scrollToBottom = () => {
    if (messagesEndRef) {
      messagesEndRef.current.addEventListener(
        "DOMNodeInserted",
        (event) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: "smooth" });
        }
      );
    }
  };
  return (
    <div className="fixed top-80 right-80 bottom-0 border">
      <div className="w-72 p-2 ">
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
        <div className="overflow-y-scroll h-60" ref={messagesEndRef}>
          {messagesData.map((message) => {
            return (
              <div className="">
                {message.user === "you" ? (
                  <div className="p-2">{message.message}</div>
                ) : (
                  <div className="p-2 text-right ">{message.message}</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24">
          <form onSubmit={AddMessages}>
            <input
              className="h-16 w-full border-2 "
              placeholder="Enter message...."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="flex justify-between">
              <div className="flex p-2">
                <BsCardImage size={16} className="mr-4" />
                <ImAttachment size={16} className="mr-4" />
                <MdGif size={16} className="mr-4" />
                <BsEmojiSmile size={16} />
              </div>
              <div className="">
                <button className="rounded bg-gray-200 px-4 mt-1">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
