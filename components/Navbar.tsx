import Menu from './Menu'; // Adjust the import path as needed

export default function Header() {
  return (
    <div className="flex justify-center h-auto md:p-0 md:h-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-7xl md:h-32"> {/* Adjust height here */}
        {/* Logo and Menu Container */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          {/* Logo */}
          <div 
            className="flex justify-center bg-logo bg-cover bg-center bg-no-repeat"
            style={{ height: '6rem', width: '6rem', maxWidth: '10rem' }} // Increased size
          >
          </div>
          {/* Menu */}
          <div className="flex justify-center w-full md:w-auto">
            <Menu /> {/* Adjust text size as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
