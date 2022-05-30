const initUser = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];

function UserReducer(state = initUser, action) {
  switch (action.type) {
    case "user/login":
      return { ...action.payload };

    default:
      return { ...state };
  }
}
export default UserReducer;
