import { useState } from "react";

function Links() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value.trim() === "") {
      alert("Input field is empty");
    } else {
      // Do something with the value
    }
  };

  return (
    // Globe
    <div className="container mx-2 md:mx-32  w-full h-full space-y-20 mt-10">
      {/* card */}
      <div className="py-3 my-5 w-full md:h-32 h-auto  rounded-2xl bg-blue-950">
        {/* box */}
        <div className="flex justify-center my-6 w-full">
          <div className="flex flex-col md:flex-row  space-y-3  justify-center md:space-x-10 md:mx-40 w-full">
            <input
              id="inputF"
              className="rounded-lg px-3 py-3 w-auto mx-2 md:w-2/3"
              type="text"
              placeholder="Shorten link here"
              value={value} // bind the input value to the state
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              id="short"
              onClick={handleClick}
              className="rounded-lg bg-cyan-500 text-md mx-2 w-1/3 md:w-40 font-bold px-6 py-3 text-white"
            >
              Shorten link
            </button>
          </div>
        </div>
      </div>

      {/* card2 */}
      <div className="container flex flex-col md:space-y-14 space-y-10 my-10  md:mx-40">
        {/* item1 */}
        <div className="flex md:flex-row md:space-x-20 items-center rounded-lg h-20 shadow-md  md:w-2/3 justify-around">
          <p className="hover:underline text-black text-lg">
            http://frontendmentor.io
          </p>
          <div className="flex justify-between items-center mx-20 md:mx-0 space-x-4 md:space-x-6 w-1/3 ">
          <p className="hover:underline text-cyan-400 text-lg">
            http://frontendmentor.io
          </p>
          <button className="px-6 py-3 h-12 hover:bg-blue-950 text-white rounded-full bg-cyan-600">
                Copy
              </button>
          </div>
        </div>

        {/* item2 */}
        <div className="flex md:flex-row items-center  md:space-x-20 h-20 rounded-lg shadow-md md:w-2/3 justify-around">
          <p className="hover:underline text-black text-lg">
            http://frontendmentor.io
          </p>
          <div className="flex justify-between items-center md:mx-0 mx-20 space-x-6 w-1/3 ">
          <p className="hover:underline text-cyan-400 text-lg">
            http://frontendmentor.io
          </p>
          <button className="px-6 py-3 h-12 hover:bg-blue-950 text-white rounded-full bg-cyan-600">
                Copy
              </button>
          </div>
        </div>

        {/* item3 */}
        <div className="flex md:flex-row items-center md:space-x-20 h-20 rounded-2xl shadow-md md:w-2/3 justify-around">
          <p className="hover:underline text-black text-lg">
            http://frontendmentor.io
          </p>
          <div className="flex justify-between items-center md:mx-0 mx-20 space-x-6 w-1/3">
          <p className="hover:underline text-cyan-400 text-lg">
            http://frontendmentor.it
          </p>
          <button className="px-6 py-3 h-12 hover:bg-blue-950 text-white rounded-full bg-cyan-600">
                Copy
              </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Links;
