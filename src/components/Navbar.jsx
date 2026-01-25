export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-[#f8c9b5] to-[#9fbfd9] rounded-b-[80px] px-10 py-6 flex justify-between items-center">
      <h1 className="text-white text-xl font-semibold">AK</h1>
      <nav className="space-x-6 text-white font-medium">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
