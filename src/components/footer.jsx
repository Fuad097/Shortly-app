import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-40 bottom-0 right-0 left-0 bg-blue-950 h-auto md:h-auto py-10">
      <div className="container mx-20 h-auto">
        <div className=" flex flex-col md:flex-row items-center  md:justify-between h-auto space-y-6">
          <div className="mt-10 flex justify-center cursor-pointer">
            <h1 className="text-gray-600 font-extrabold text-2xl ">Shortly</h1>
          </div>
          <div className="flex  justify-center space-x-12 cursor-pointer">
            {/* list1 */}
            <ul className="md:mt-20">
              <h2 className="text-white font-bold text-lg underline underline-offset-4 mb-4">
                Features
              </h2>
              <li className="text-gray-500 text-md">Link Shortening</li>
              <li className="text-gray-500 text-md">Branded links</li>
              <li className="text-gray-500 text-md">Analytics</li>
            </ul>

            {/* list 2 */}
            <ul className="md:mt-20">
              <h2 className="text-white font-bold text-lg underline underline-offset-4 mb-4">
                Resources
              </h2>
              <li className="text-gray-500 text-md">Blog</li>
              <li className="text-gray-500 text-md">Developers</li>
              <li className="text-gray-500 text-md">Supports</li>
            </ul>

            {/* list3 */}
            <ul className="md:mt-20">
              <h2 className="text-white font-bold text-lg underline underline-offset-4 mb-4">
                Company
              </h2>
              <li className="text-gray-500 text-md">About</li>
              <li className="text-gray-500 text-md">Our team</li>
              <li className="text-gray-500 text-md">Careers</li>
              <li className="text-gray-500 text-md">Contact</li>
            </ul>
          </div>
          <div className="social-apps md:mt-20  flex space-x-6 cursor-pointer">
            <IoLogoFacebook className="text-2xl text-white"/>
            <FaTwitter className="text-2xl text-white"/>
            <FaPinterestP className="text-2xl text-white"/>
            <FaInstagram className="text-2xl text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
