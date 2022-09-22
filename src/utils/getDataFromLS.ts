export const getUsersFromLS = () => {
  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : null;

  return {
    user,
    isError: false,
    isSuccess: false,
    isLoading: false,
  };
};
