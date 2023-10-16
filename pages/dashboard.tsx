import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("loggedin");
    router.push('/')
  };
  
  return (
      <div className="dashboard">
        <h1>Okrica Admin</h1>
        <button type="submit" onClick={() => logOut()} >Log Out</button>
      </div>
  );
};

export default Dashboard;
