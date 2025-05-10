/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const UserEditForm = ({ user, onClose }: any) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Updated User:", updatedUser);
    onClose();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="text-lg font-bold mb-4">Edit User</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-3">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              value={updatedUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control mb-3">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              value={updatedUser.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Role</label>
            <select
              name="role"
              className="select select-bordered"
              value={updatedUser.role}
              onChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditForm;
