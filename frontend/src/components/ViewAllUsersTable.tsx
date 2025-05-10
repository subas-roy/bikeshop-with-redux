/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "sonner";
import { useDeleteUserMutation, useGetAllUsersQuery } from "../redux/features/user/userApi";
import UserEditForm from "./UserEditForm";


const ViewAllUsersTable = () => {
  const { data: response, isLoading } = useGetAllUsersQuery(undefined);
  const users = response?.data || [];
  const [deleteUser] = useDeleteUserMutation();

  const [editingUser, setEditingUser] = useState<any>(null);

  const handleDeleteUser = async (_id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(_id).unwrap();
        toast.success("User deleted successfully");
      } catch (err) {
        toast.error("Failed to delete user");
      }
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      {editingUser && (
        <UserEditForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
        />
      )}
      <table className="table w-full">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Registered</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, index: number) => (
            <tr key={user._id || index}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.avatar || "/user.png"} alt="user avatar" />
                  </div>
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                <div className="dropdown dropdown-end">
                  <button tabIndex={0} className="btn btn-ghost btn-xs">
                    ⋯
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <button onClick={() => setEditingUser(user)}>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllUsersTable;
