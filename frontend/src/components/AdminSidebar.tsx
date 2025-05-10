import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { toast } from "sonner";

const AdminSidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully!");
    navigate("/login");
  };
  return (
    <div className="h-full w-full shadow-md p-4 bg-base-200">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>

      <nav className="space-y-4  font-medium">
        {/* Dashboard */}
        <ul>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>

        {/* Product Management */}
        <details className="collapse collapse-arrow bg-base-200">
          <summary className="collapse-title">Product Management</summary>
          <ul className="collapse-content space-y-2">
            <li>
              <NavLink
                to="/admin/create-product"
                className={({ isActive }) =>
                  `block px-6 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                  }`
                }
              >
                Create Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/manage-product"
                className={({ isActive }) =>
                  `block px-6 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                  }`
                }
              >
                Manage Products
              </NavLink>
            </li>
          </ul>
        </details>
        {/*>>> Order Management >>>*/}
        <details className="collapse collapse-arrow bg-base-200 mt-2">
          <summary className="collapse-title">Order Management</summary>
          <ul className="collapse-content space-y-2">
            <li>
              <NavLink
                to="/admin/manage-order"
                className={({ isActive }) =>
                  `block px-6 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                  }`
                }
              >
                Manage Orders
              </NavLink>
            </li>
          </ul>
        </details>

        {/* User Management */}
        <ul>
          <li>
            <NavLink
              to="/admin/manage-user"
              className={({ isActive }) =>
                `block px-6 py-2 rounded-md ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                }`
              }
            >
              Manage Users
            </NavLink>
          </li>
        </ul>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-red-100 text-red-600 w-full mt-4"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
