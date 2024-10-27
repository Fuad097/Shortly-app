import imr from "../assets/illus.svg";

function Hero() {
  return (
    <div className="container">
      {/* card */}
      <div className="flex flex-col-reverse justify-center md:flex md:flex-row md:justify-between md:space-x-10  space-y-2">
        <div className="flex flex-col w-auto md:w-2/4 mx-28 space-y-6">
          <h1 className="text-4xl font-extrabold text-black text-wrap">
            More than just short links
          </h1>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui totam
            non inventore ipsam temporibus veniam accusamus unde minus
            consequatur, repudiandae delectus omnis? Id sunt voluptas
            recusandae.
          </p>
          <button className="bg-cyan-400 rounded-full text-white py-4 px-6 text-2xl font-bold w-auto md:w-2/6 hover:scale-105 hover:bg-blue-950 hover:text-white hover:outline-white">
            Get started
          </button>
        </div>
        <div className="flex justify-center">
          <img src={imr} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
