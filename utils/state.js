import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const MyContextData = createContext({}); // null is the default value

export const MyContext = (props) => {
  const [myState, setMyState] = useState({});

  useEffect(() => {
    Axios.get(
      "https://my-json-server.typicode.com/othewebdev/hq-links-api/releases/0"
    )
      .then((response) => {
        setMyState(response.data); // update your state
      })
      .catch((error) => {
        // handle errors
      });
  }, []);

  return (
    <MyContextData.Provider
      value={myState} // value of your context
    >
      {props.children}
    </MyContextData.Provider>
  );
};
