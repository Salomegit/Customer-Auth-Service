  import { useForm } from 'react-hook-form';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useAuth } from '../../../contexts/useAuth';
  const RegisterForm = () => {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const { register_user } = useAuth();

    const {
      register,
      handleSubmit,
      setError,
      watch,
      formState: { errors, isSubmitting },
    } = useForm();
    const password = watch('password');


    const onSubmit = async ({ username, email, password, confirmPassword }) => {

      if (password !== confirmPassword) {
        setError('confirmPassword', {
          type: 'manual',
          message: 'Passwords do not match',
        });
        return;
      }
      try {
        const result = await register_user(username,email, password,  confirmPassword);
        if (result) {
          setSuccessMessage('User Successfully Registered ! Welcome');
          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate('/login');

        } else {
          setError('root', {
            type: 'manual',
            message: 'Registration failed. Try again!', // This will show if login fails
          });
        }

        // Simulating delay before redirect

      } catch (error) {
        setError('root', {
          type: 'manual',
          message: 'Error during login process!', // General error handling
        });
      }
    };

    return (
      <div className="flex justify-center items-center p-6 shadow-md rounded-md w-80 mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              {...register('username', { required: 'Username is required' })}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Invalid email format',
                },
              })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
              })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <div className="text-red-500">{errors.password.message}</div>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => {

                  console.log('Password:', watch('password'));
                  console.log('Confirm Password:', value);
                  return value === password || 'Passwords do not match'; // Custom validation

                }
              })}
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}
          </div>

          {/* Success Message */}
          {successMessage && <div className="text-green-500">{successMessage}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Submit'}
          </button>

          {/* General Error */}
          {errors.root && <div className="text-red-500">{errors.root.message}</div>}
        </form>
      </div>
    );
  };

  export default RegisterForm;
