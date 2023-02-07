export const API_URL = "https://api-accounts.fly.dev/accounts/";

export async function withdraw() {}

export async function deposit(body) {
  return {
    url: API_URL + `${data && data.id}/deposit`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
  let objAccount = {
    amount: Number(valueInput.value),
    type: "deposito",
  };

  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objAccount),
  };
  const response = await fetch(API_URL + `${data && data.id}/deposit`, init);
  const json = await response.json();
  window.localStorage.setItem("data", JSON.stringify(json));
  setValueDeposit(json);
}

// let objAccount = {
//   amount: Number(valueInput.value),
//   type: "deposito",
// };

// const init = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(objAccount),
// };
// const response = await fetch(API_URL + `${data && data.id}/deposit`, init);
// const json = await response.json();
// window.localStorage.setItem("data", JSON.stringify(json));
// setValueDeposit(json);
