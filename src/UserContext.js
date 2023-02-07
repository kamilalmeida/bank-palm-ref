import React from "react";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function autoLogin() {
      const dataUserString = window.localStorage.getItem("data");
      const dataUserObj = JSON.parse(dataUserString);

      if (dataUserObj) {
        getUserId(dataUserObj);
        console.log("autoLogin");
      }
    }
    console.log("useEffect");
    autoLogin();
  }, []);

  async function getUserId(jsonRes) {
    const init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `https://api-accounts.fly.dev/accounts/${jsonRes && jsonRes.id}`,
      init
    );
    const json = await response.json();
    console.log("GET:", json);
    setData(json);
  }
  console.log("geral");
  async function userLogin(username) {
    let objAccount = {
      name: username.value,
    };
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objAccount),
    };

    const response = await fetch("https://api-accounts.fly.dev/accounts", init);
    const jsonRes = await response.json();
    window.localStorage.setItem("data", JSON.stringify(jsonRes));
    getUserId(jsonRes);
    console.log("POST:", jsonRes);
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        getUserId,
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
