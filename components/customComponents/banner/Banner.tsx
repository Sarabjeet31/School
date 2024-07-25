import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Banner({ title = '404', text = '' }) {
  return (
    <div className="relative h-96 flex items-center justify-center text-4xl font-bold text-white ">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/image.png)', filter: 'brightness(50%)' }}></div>
      <div className="absolute inset-0 bg-orange-300 opacity-20"></div>
      <div className="relative">
        { title }
        <div className="text-lg flex justify-center items-center mt-3">
          <Link href = '/'> Home</Link>
          <IoIosArrowForward />
          { text }
        </div>
      </div>
    </div>
  )
}
