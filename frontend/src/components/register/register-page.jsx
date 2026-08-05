
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdPersonAddAlt1 } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
const navigate = useNavigate()
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.phone || !user.password || !user.confirmPassword) {
      return alert("Please fill in all fields.");
    }

    if (user.password !== user.confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        {
          name: user.name,
          phone: user.phone,
          password: user.password,
        }
        
      )
          
      alert(response.data.message);

      setUser({
        name: "",
        phone: "",
        password: "",
        confirmPassword: "",
        
      });
 navigate("/profile")
    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-emerald-900 py-8 text-center">

          <MdPersonAddAlt1
            size={55}
            className="mx-auto text-white"
          />

          <h1 className="text-3xl font-bold text-white mt-3">
            Create Account
          </h1>

          <p className="text-emerald-100 mt-2">
            Register to access your Elite Wallet
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-5"
        >

          {/* Name */}

          <div>
            <label className="font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Email */}

          <div>
            <label className="font-semibold">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Password */}

          <div>
            <label className="font-semibold">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Confirm Password */}

          <div>
            <label className="font-semibold">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Register Button */}

          <button
            type="submit"
            className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition duration-300 flex justify-center items-center gap-2"
          >
            <MdPersonAddAlt1 size={22} />
            Register
          </button>

          {/* Login */}

          <div className="text-center pt-2">

            <p className="text-gray-600">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-emerald-700 font-semibold mt-2 hover:underline"
            >
              <CiLogin size={22} />
              Login
            </Link>
          
          </div>

        </form>
   
      </div>

    </div>
  );
}

export default Register;