/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  UserCircleIcon,
  PencilSquareIcon,
  KeyIcon,
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { toast } from "sonner";
import { Link } from "react-router-dom";

type Props = {
  onClose: () => void;
};

const ProfileDropdownModal = ({ onClose }: Props) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state : any) => state.auth.user);
  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully!");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-xl rounded-xl w-64 p-4 space-y-4 border border-gray-100 dark:border-gray-700">
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-xl text-gray-500 dark:text-gray-300 hover:text-red-500"
      >
        &times;
      </button>

      {/* Profile Info */}
      <div className="flex flex-col items-center">
        <UserCircleIcon className="w-20 h-20 text-indigo-500 dark:text-indigo-400" />

        <h2 className="text-lg font-semibold mt-1">{user?.name || "John Doe"}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email || "demo@example.com"}
        </p>
      </div>

      {/* Menu */}
      <ul className="space-y-3 pt-2">
        <Link to="/profile">
          <li className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <PencilSquareIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Edit Profile</span>
          </li>
        </Link>
        <li className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
          <KeyIcon className="w-5 h-5 text-orange-500 dark:text-orange-400" />
          <span>Change Password</span>
        </li>
        <Link to="/orders">
          <li className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <ShoppingBagIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span>My Orders</span>
          </li>
        </Link>
        <li
          onClick={handleLogout}
          className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500 dark:text-red-400" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdownModal;
