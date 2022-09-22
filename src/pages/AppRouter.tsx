import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/routes";
import { MAIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useEffect, useState } from "react";

const AppRouter = (): JSX.Element => {
  const [isUser, setIsUser] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isUser ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate replace to={MAIN_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return <Route path={path} key={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
