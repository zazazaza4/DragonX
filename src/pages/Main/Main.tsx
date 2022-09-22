import { FC } from "react";
import { Link } from "react-router-dom";
import { withLayout } from "../../layout/Layout";

import "./Main.css";

const Main: FC = () => {
  return (
    <main className="main">
      <Link to="/dragons/123">adasda</Link>
    </main>
  );
};
export default withLayout(Main);
