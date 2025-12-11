import { Outlet } from 'react-router';
import UserNavBar from './components/user/userNavbar';
import UserFooter from './components/user/userFooter';
function UserHome() {
  // async function aa() {
  //   const a = await fetch('http://192.168.29.119:3000/api/data')
  //   const data = await a.json(a)
  //   console.log(data);

  // }
  return (
    <>
      <UserNavBar />
      <Outlet/>
      <UserFooter/>
    </>
  );
}
export default UserHome
