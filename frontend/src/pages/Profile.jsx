import React from "react";
import {
  User,
  Phone,
  Hash,
  Mail,
  Edit,
  ShieldCheck,
   Wallet,
  Gift,
} from "lucide-react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 h-40 relative">
          <div className="absolute -bottom-14 left-10">
            <div className="w-28 h-28 rounded-full bg-white shadow-lg border-4 border-white flex items-center justify-center">
              <User size={55} className="text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-10 pb-10">

          {/* Name & Status */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {user?.name}
              </h2>

              <p className="text-gray-500 mt-1">
                User
              </p>
            </div>

            <span className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              <ShieldCheck size={18} />
              Verified Account
            </span>
          </div>

          {/* User Information */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Hash className="text-emerald-600" />
                <div>
                  <p className="text-gray-500 text-sm">User ID</p>
                  <p className="font-semibold text-lg">{user?.id}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <User className="text-emerald-600" />
                <div>
                  <p className="text-gray-500 text-sm">Full Name</p>
                  <p className="font-semibold text-lg">{user?.name}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-600" />
                <div>
                  <p className="text-gray-500 text-sm">Phone Number</p>
                  <p className="font-semibold text-lg">{user?.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-600" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-semibold text-lg">
                    {user?.email || "Not Available"}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">

            <button className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition">
              <Edit size={18} />
              Edit Profile
            </button>

            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-xl font-medium transition">
              Change Password
            </button>
            

          </div>
          {/* Action Buttons */}
<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

  {/* Edit Profile */}
  {/* <button className="flex flex-col items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-5 transition shadow-md">
    <Edit size={24} />
    <span className="text-sm font-medium">Edit Profile</span>
  </button> */}

  {/* Wallet */}
  <button className="flex flex-col items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl p-5 transition shadow-md">
    <Wallet size={24} />
    <span className="text-sm font-medium">Wallet</span>
    <span className="text-sm">₹0.00</span>
  </button>

  {/* Rewards */}
  <button className="flex flex-col items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl p-5 transition shadow-md">
    <Gift size={24} />
    <span className="text-sm font-medium">Rewards</span>
    <span className="text-xs">250 Points</span>
  </button>

  {/* Change Password */}
  <button className="flex flex-col items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-xl p-5 transition shadow-sm">
    <ShieldCheck size={24} />
    <span className="text-sm font-medium">Security</span>
    <span className="text-xs">Password</span>
  </button>

</div>

        </div>
      </div>
    </div>
  );
}

export default Profile;

