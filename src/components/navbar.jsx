import image from "../assets/google-earth-logo-svgrepo-com.svg"


function Navbar() {
  return (
    <div className="flex justify-center top-0 left-0 right-0 w-full  my-5 h-20">
      <div className="flex items-center mx-10 container top-0 left-0 right-0 w-full">
        {/* navbar */}
        <nav className="flex py-6 justify-between w-full text-black">
          {/* links */}
          <div className="flex items-center justify-between ">
            <div className="flex justify-between items-center w-1/12 space-x-4">
            <img id="globe" src={image} alt="logo" />
            <h1  className="font-extrabold  text-blue-400 text-2xl">Shortly</h1>
            </div>
            <ul className="hidden md:flex  md:justify-between md:space-x-6 font-bold text-md text-gray-400">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
            </ul>
          </div>
          <div className="hidden md:flex md:justify-between md:space-x-8 h-12">
            <button className="font-semibold   text-gray-400 text-md">
              Login
            </button>
            <button className="rounded-3xl text-md bg-gradient-to-r font-semibold from-blue-300 to-blue-400 px-6 py-3 ">
              Sign Up
            </button>
          </div>
        </nav>
        {/* togglebar */}
        <div id="bar" className="flex flex-col space-y-2 md:hidden ">
          <span className="span-top rounded-lg"></span>
          <span className="span-middle rounded-lg"></span>
          <span className="span-bottom rounded-lg"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
