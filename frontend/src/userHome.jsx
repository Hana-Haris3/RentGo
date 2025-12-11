import { Outlet } from 'react-router';
import UserNavBar from './components/user/userNavbar';

function UserHome() {
  return (
    <>
      <UserNavBar/>
      <Outlet/>
    </>
  );
}
export default UserHome
