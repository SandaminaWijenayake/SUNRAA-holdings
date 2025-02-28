export default function Navbar() {
  return (
    <div className="w-full">
      <div className=" w-8/12 m-auto   py-4  flex justify-between items-center">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex space-x-6 text-black font-medium">
          <li className="text-red-500">Home</li>

          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="text-black">Login</button>
          <span>|</span>
          <button className="text-black">Register</button>
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
