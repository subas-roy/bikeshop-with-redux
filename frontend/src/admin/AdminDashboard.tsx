import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
    <div className="w-64">
      <AdminSidebar />
    </div>
    <div className="flex-1 p-6 overflow-y-auto">
    <Outlet />
    </div>
  </div>
);
};


export default AdminDashboard;
