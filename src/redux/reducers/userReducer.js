const initUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];
console.log(localStorage.getItem("user"));
function UserReducer(state = initUser, action) {
  switch (action.type) {
    case "user/login":
      console.log(8, JSON.stringify(action.payload));
      window.localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...action.payload };

    case "admin/login":
      console.log(13, JSON.stringify(action.payload));
      window.localStorage.setItem("admin", JSON.stringify(action.payload));
      return { ...action.payload };

    default:
      return { ...state };
  }
}
export default UserReducer;
