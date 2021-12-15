import { createContext, useReducer } from "react";

export const UserContext = createContext(null);

const initialState = {
  users: [
    {
      id: "5af6dd80-1e8e-46fe-a841-f970792cb096",
      name: "Mohsin",
      type: "employer",
    },
    {
      id: "cd7f5ba2-c4b4-4e59-852e-59add89dbb37",
      name: "Ali",
      type: "candidate",
    },
    {
      id: "90ca670d-9ea3-4a73-9c2f-a1189660ee93",
      name: "Soomro",
      type: "employer",
    },
    {
      id: "5af6dd80-1e8e-46fe-a841-aofja02ur234",
      name: "Asim",
      type: "employer",
    },
    {
      id: "cd7f5ba2-c4b4-4e59-852e-24123412jipn",
      name: "Shah",
      type: "candidate",
    },
    {
      id: "90ca670d-9ea3-4a73-9c2f-034568jhrije",
      name: "Memon",
      type: "employer",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER": {
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload.name,
            id: action.payload.id,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
