import React, { useContext, useEffect, useRef } from "react";
import Message from "./message";
import Messages from "./messages";
import { UserContext } from "./state/user";

function Dashboard({ userId, selectUser, recipient }) {
  const messagesEndRef = useRef(null);
  const state = useContext(UserContext);

  const scrollToBottom = () => {
    if (messagesEndRef) {
      messagesEndRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  console.log("User context", state);
  if (!state.state.users.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-3/12 h-screen bg-green-600 text-white">
        <div>
          <input type="text" placeholder="search messages" />
        </div>
        <h1 className="ml-2 text-2xl ">Contacts </h1>
        {state.state.users.map((user) => {
          return (
            <div
              className="text-lg m-2 border p-2"
              onClick={() => selectUser(user.id)}
              style={{ cursor: "pointer", fontSize: "20px" }}
              key={user.id}
            >
              {user.name} ({user.type})
            </div>
          );
        })}
        <h1 className="bg-green-600 text-white text-2xl">
          Chat :{" "}
          {recipient
            ? `${state.state.users.find((u) => u.id === recipient).name} (${
                state.state.users.find((u) => u.id === recipient).type
              })`
            : "N/A"}
        </h1>
        <p className="fixed bottom-0 text-lg p-2 m-2 border-b">
          You : {state.state.users.find((u) => u.id === userId).name} (
          {state.state.users.find((u) => u.id === userId).type})
        </p>
      </div>
      <div className="w-9/12">
        <Messages userId={userId} messagesEndRef={messagesEndRef} />
        <Message userId={userId} recipient={recipient} />
      </div>
    </div>
  );
}

export default Dashboard;
