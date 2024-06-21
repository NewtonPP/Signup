import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen min-w-96 bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center">
        <div className="h-auto w-[700px] bg-white shadow-lg rounded-lg p-8">
          <h1 className="font-bold text-center text-4xl text-gray-800 mb-4">Welcome to Signup</h1>
          <h2 className="text-center text-2xl text-gray-600 mb-8">Create your own signature</h2>
          <div className="flex justify-center">
            <button
              className="h-12 w-40 text-lg text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-all duration-300 ease-in-out"
              onClick={() => navigate("/sign")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
