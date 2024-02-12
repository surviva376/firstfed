import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[95px] flex items-center mb-[50px] shadow-[0_2px_3px_0_#00000033] bg-white py-[10px]">
      <div className="mx-auto w-full px-[15px] max-w-[1023px] max-lg:max-w-[768px] max-md:max-w-[578px] max-sm:max-w-[400px]">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="First Tech Federal Credit Union Dashboard"
            height={45}
            width={150}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
