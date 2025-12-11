import { Outlet } from 'react-router';
import AdminNavBar from './components/admin/adminNavbar';

function AdminHome() {
  return (
    <>
      <AdminNavBar/>
      <Outlet/>
    </>
  );
}
export default AdminHome
