const userKey = "userSignInfo";

const storedData = localStorage.getItem(userKey);
if (storedData) {
  window.location.href = "./src/tracker/index.html";
}
