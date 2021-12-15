import React, { useContext, useEffect } from "react";
import { MessageContext } from "./state/message";
import { SocketContext } from "./state/socket";
import { UserContext } from "./state/user";

function Messages({ messagesEndRef }) {
  const { state, dispatch } = useContext(MessageContext);

  const users = useContext(UserContext);

  const senderId = localStorage.getItem("senderId");

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      dispatch({
        type: "SEND_MESSAGE",
        payload: {
          message: data.message,
          recipient: data.recipient,
          senderId: data.senderId,
        },
      });
    });
  }, [socket, dispatch]);

  return (
    <div className="h-screen overflow-y-scroll" ref={messagesEndRef}>
      {state.messages.map((message, i) => {
        const sender = users.state.users.find((f) => f.id === message.senderId);
        return (
          <div
            className={
              sender.id === senderId
                ? " border text-lg py-2 px-5 shadow-sm m-1 rounded"
                : " border text-lg py-2 px-5 shadow-sm m-1 rounded bg-blue-600 text-white"
            }
            key={i}
          >
            <h3>{message.message}</h3>
            <div>{sender && sender.id === senderId ? "You" : sender.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
