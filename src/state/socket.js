import { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

export const SocketContext = createContext(null);

export const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const sockets = io("http://localhost:5000", { query: { id } });
    setSocket(sockets);
    return () => sockets.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
