import { useForm } from 'react-hook-form';
import login_api from '../../../endpoints/api';

const LoginForm = () => {

  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    try {

      login_api(data.username, data.password);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error();
    }
    catch (error) {
      setError("root", {
        type: 'manual',
        message: 'Invalid username or password'
      })

    }

  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            {...register('username', { required: "Username is required" })}
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}

        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            {...register('password', { required: 'password is required', minLength: { value: 5, message: 'password must be at least 6 characters' } })}
            type="password"
            id="password"

            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <div className="text-red-500">{errors.password.message}</div>}

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Loading...' : 'Submit'}
        </button>
        {errors.root && <div className="text-red-500">{errors.root.message}</div>}

      </form>
    </div>
  );
};

export default LoginForm;
