const userKey = "userSignInfo";

const storedData = localStorage.getItem(userKey);
const user = JSON.parse(storedData);

if (user && user?.loggedIn) {
  window.location.href = "./src/tracker/index.html";
}
