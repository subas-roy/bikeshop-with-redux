/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaCreditCard,
  FaSignOutAlt,
  FaCalendarAlt,
  FaSave,
  FaEdit,
  FaTrashAlt,
  FaPlus,
} from "react-icons/fa";
import { useAppDispatch } from "../redux/hook";
import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";

export default function CustomerProfile() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg");
  const [activePanel, setActivePanel] = useState<
    "profile" | "addresses" | "payment"
  >("profile");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    dateJoined: "",
  });
console.log(profileImage);


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const dispatch = useAppDispatch();
  
   

    const handleLogout = () => {
      dispatch(logout());
      toast.success("Logout successfully!");
      window.location.href = "/login";
    };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("✅ Profile updated successfully!");
  };

  const handleAccountDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmed) {
      toast.message("❌ Account deleted.");
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-base-200 p-4 rounded-lg space-y-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={profileImage} alt={profile.name} />
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg">{profile.name}</h2>
            <p className="text-sm opacity-70">{profile.email}</p>
          </div>
          <ul className="menu menu-vertical w-full">
            <li>
              <button
                onClick={() => setActivePanel("profile")}
                className={`flex items-center gap-2 ${
                  activePanel === "profile" ? "bg-primary text-white" : ""
                }`}
              >
                <FaUser /> My Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePanel("addresses")}
                className={`flex items-center gap-2 ${
                  activePanel === "addresses" ? "bg-primary text-white" : ""
                }`}
              >
                <FaMapMarkerAlt /> Addresses
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePanel("payment")}
                className={`flex items-center gap-2 ${
                  activePanel === "payment" ? "bg-primary text-white" : ""
                }`}
              >
                <FaCreditCard /> Payment Methods
              </button>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:bg-red-100">
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">My Account</h1>

          {/* Profile Panel */}
          {activePanel === "profile" && (
            <form
              onSubmit={handleProfileUpdate}
              className="card bg-base-100 shadow-md"
            >
              <div className="card-body">
                <h2 className="card-title">Personal Information</h2>
                <p>Update your details and profile picture</p>

                <div className="flex flex-col items-center gap-4">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={profileImage} alt={profile.name} />
                    </div>
                  </div>
                  <label
                    htmlFor="picture"
                    className="btn btn-primary btn-sm cursor-pointer"
                  >
                    Upload Picture
                    <input
                      type="file"
                      id="picture"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Member Since</span>
                    </label>
                    <div className="flex items-center gap-2 input input-bordered bg-base-200 w-full">
                      <FaCalendarAlt />
                      <span>{profile.dateJoined}</span>
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-between mt-4 flex-wrap gap-2">
                  <button type="submit" className="btn btn-primary">
                    <FaSave className="mr-2" /> Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-error"
                    onClick={handleAccountDelete}
                  >
                    <FaTrashAlt className="mr-2" /> Delete Account
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Addresses Panel */}
          {activePanel === "addresses" && (
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Shipping Addresses</h2>
                <p>Manage your shipping addresses</p>

                <div className="space-y-4">
                  <div className="border p-4 relative rounded-lg">
                    <div className="badge badge-primary absolute top-4 right-4">
                      Default
                    </div>
                    <div className="space-y-1 pr-16">
                      <div className="font-medium">Home</div>
                      <div className="text-sm opacity-70">
                        Emma Wilson
                        <br />
                        123 Main Street, Apt 4B
                        <br />
                        New York, NY 10001
                        <br />
                        Phone: +1 (555) 123-4567
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="btn btn-outline btn-sm">
                        <FaEdit className="mr-1" /> Edit
                      </button>
                      <button className="btn btn-outline btn-sm text-red-500">
                        <FaTrashAlt className="mr-1" /> Delete
                      </button>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary btn-sm mt-4">
                  <FaPlus className="mr-1" /> Add Address
                </button>
              </div>
            </div>
          )}

          {/* Payment Panel */}
          {activePanel === "payment" && (
            <div className="alert alert-info">
              💳 Payment methods content here (coming soon!)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
