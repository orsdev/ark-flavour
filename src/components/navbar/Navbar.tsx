export const Navbar = () => {
  return (
    <header className="sticky z-50 top-0 left-0 w-full bg-transparent">
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex flex-grow items-center">
          <img
            className="w-[45px] cursor-pointer"
            src="/images/logo.png"
            alt="logo"
          />
          <div className="ml-2">
            <h4>
              <span className="text-red-600">Ark's</span> Flavour
            </h4>
          </div>
        </div>
      </nav>
    </header>
  );
};
