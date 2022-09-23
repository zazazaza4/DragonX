import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "../routes/routes";
import { MAIN_ROUTE } from "../utils/consts";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsmobile from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsmobile);

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate replace to={MAIN_ROUTE} />} />
    </Routes>
  );
};

export default withAuthenticator(AppRouter);
