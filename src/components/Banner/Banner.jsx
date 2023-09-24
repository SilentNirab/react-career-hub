import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="text-start">
            <div className="lg:flex">
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">One Step Closer To Your <span className="text-blue-600 dark:text-blue-400">Dream Job</span></h2>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                            <Link href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</Link>
                            
                        </div>
                    </div>
                </div>

                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                  <img className="h-fit" src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1695489793~exp=1695490393~hmac=d4c272bab1f95c1e7f9f8f9b29538813e9af4202cd82b9bbb7b273e7479ddb16" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;