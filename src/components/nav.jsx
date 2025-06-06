import "../App.css";

export default function Nav() {
  return (
    <nav className="h-16 border-b border-gray-500 bg-black flex items-center justify-between px-4 text-white fixed z-50 top-0 left-0 right-0 ">
      <h1 className="text-2xl font-bold ">Dream Agency</h1>
      <div className="hidden md:flex space-x-4">
            <a href="#home">
            <button className="hover:text-gray-300 ">Home</button>
            </a>
        <a href="#about">
        <button className="hover:text-gray-300 ">About</button>
        </a>
        <a href="#about">
        <button className="hover:text-gray-300 ">Works</button>
        </a>
             <a href="#contact">
        <button className="hover:text-gray-300 ">Contact-us</button>
        </a>
      </div>
      <div className="space-x-3">
        <i class="fa-brands fa-instagram"></i>
        
        
      </div>
    </nav>
  );
}
