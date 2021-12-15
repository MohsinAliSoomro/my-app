import { createContext, useReducer } from "react";

export const MessageContext = createContext(null);

const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE": {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            message: action.payload.message,
            recipient: action.payload.recipient,
            senderId: action.payload.senderId,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
