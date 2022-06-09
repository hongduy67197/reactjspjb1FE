export const Login = function (userInfo) {
  return {
    type: "user/login",
    payload: { ...userInfo },
  };
};
