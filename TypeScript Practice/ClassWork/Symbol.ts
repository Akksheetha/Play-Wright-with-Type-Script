const secret = Symbol("secret");
const user = { name: "Alice",
    [secret] : "top-secret-token"
};
console.log(user[secret]);
const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols);