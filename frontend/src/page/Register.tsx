/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  
  const [registers] = useRegisterMutation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: FieldValues) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        age: data.age,
        password: data.password,
      };

      const res = await registers(userInfo).unwrap();
      console.log(res);
      toast.success("Registration successful!");
      console.log(userInfo);
      navigate("/login")
      
    } catch (error : any) {
      toast.error(`Something went wrong: ${error.message}`);
    }
  };
  return (
    <div className="space-y-5">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Create Account
          </h2>
          <form  onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Age */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                {...register("age")}
                placeholder="Your age"
                className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Create a strong password"
                className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Register
            </button>

            {/* Link to Login */}
            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
