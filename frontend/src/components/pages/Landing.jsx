import { useNavigate } from "react-router-dom";
const LandingPage = () => {

    const navigate = useNavigate();
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-indigo-600">SaliTask</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-indigo-600"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex space-x-4">
            <button onClick={()=>{navigate('/login')}} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Login
            </button>
            <button onClick={()=>{navigate('/register')}} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Register
            </button>
          </div>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to SallyShop
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the best way to manage your projects efficiently and
            effectively.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Feature One</h3>
              <p className="text-gray-600">
                Efficient and powerful tools to make your workflow seamless.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Feature Two</h3>
              <p className="text-gray-600">
                Collaborate with your team like never before.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Feature Three</h3>
              <p className="text-gray-600">
                Comprehensive analytics to keep track of your progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 SaliTask. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
