import { useEffect, useState } from "react";
import { UsersProvider } from "./state/user";
import { MessageProvider } from "./state/message";
import { SocketContext, SocketProvider } from "./state/socket";
import { useContext } from "react";
import MessageComponent from "./components/MessageComponent";
import MessageComponentSearch from "./components/MessageComponentSearch";
import ChatContainer from "./components/Chat";
// const SERVER = "http://localhost:5000";
// const socket = io(SERVER);

function App() {
  const [open, setOpen] = useState(false);
  const socket = useContext(SocketContext);
  const [recipient, setRecipient] = useState();
  const [userId, setUserId] = useState();
  const [chatScreen, setChatScreen] = useState([]);
  const senderId = localStorage.getItem("senderId");

  const [dashboardShow, setDashboardShow] = useState(false);

  useEffect(() => {
    if (senderId != null) {
      setUserId(senderId);
      setDashboardShow(true);
    }
  }, [senderId, userId]);

  //get user that you need to send message
  const selectUser = (user) => {
    setRecipient(user);
  };

  const getSelectUserIndex = (index) => {
    console.log(index);
    if (chatScreen.find((f) => f === index)) return;
    setChatScreen((prev) => [...prev, index]);
  };

  const modalChat = () => setOpen(!open);

  return (
    <SocketProvider id={userId}>
      <UsersProvider>
        <MessageProvider>
          <div className="relative">
            {open ? (
              <>
                <MessageComponent
                  modalChat={modalChat}
                  getSelectUserIndex={getSelectUserIndex}
                />
                {chatScreen.length && (
                  <ChatContainer
                    modalChat={modalChat}
                    getSelectUserIndex={getSelectUserIndex}
                  />
                )}
              </>
            ) : (
              <MessageComponentSearch modalChat={modalChat} />
            )}

            {/* {dashboardShow ? (
              <Dashboard
                userId={userId}
                selectUser={selectUser}
                recipient={recipient}
              />
            ) : (
              <Login
                userId={userId}
                setUserId={setUserId}
                setDashboardShow={setDashboardShow}
              />
            )} */}
          </div>
        </MessageProvider>
      </UsersProvider>
    </SocketProvider>
  );
}

export default App;
