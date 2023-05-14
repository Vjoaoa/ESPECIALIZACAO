import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./nav/nav";

export default function Layout() {
  const navigate = useNavigate();

  let isLogged = false;

  if (!isLogged) {
    navigate("/login");
  }

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}