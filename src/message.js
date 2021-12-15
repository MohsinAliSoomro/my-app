import React, { useContext, useState } from "react";
import { MessageContext } from "./state/message";
import { SocketContext } from "./state/socket";

function Message({ userId,recipient }) {
  const [message, setMessage] = useState();
  const { state, dispatch } = useContext(MessageContext);
  const socket = useContext(SocketContext);

  const sendMessage = () => {
    if(!recipient) return alert("please select contact")
    socket.emit("sendMessage", {
      message: message,
      recipient: recipient,
      senderId: userId,
    });

    dispatch({
      type: "SEND_MESSAGE",
      payload: {
        message: message,
        recipient: recipient,
        senderId: userId,
      },
    });
    setMessage("");
  };

  console.log({ state });

  return (
    <div className="w-full border shadow fixed bottom-0 flex">
      <div className="w-7/12">
      <input
      className="w-full h-16 py-4 px-2 shadow rounded-lg focus:outline-none"
        type="text"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      </div>
      <div className="w-2/12">
      <button className="w-full  h-16 py-4 px-6 border shadow text-lg bg-blue-800 text-white rounded " onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Message;
