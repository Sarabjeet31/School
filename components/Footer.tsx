import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="text-white bg-darkMain w-full p-8 md:p-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="mb-8 md:mb-0">
          <div className="mb-5 font-bold text-2xl">Questions?</div>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <CiLocationOn />
              ABCDEFGGHLDSNFSFSF
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt />
              9811064541
            </div>
            <div className="flex gap-2 items-center">
              <FaEnvelope />
              sarabjeet.lamba32@gmail.com
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <div className="mb-5 font-bold text-2xl">External Links</div>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">fsfsdfsfsdf</Link>
            </div>
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">sdfsdfsdfsdf</Link>
            </div>
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">sdfsfsdfsdf</Link>
            </div>
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">sdfsfdsfsdf</Link>
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <div className="mb-5 font-bold text-2xl">Links</div>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">sdfsdfsfd</Link>
            </div>
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">sdfsdf</Link>
            </div>
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">sdfsdffsd</Link>
            </div>
            <div className="flex gap-2 items-center">
              <FiLink />
              <Link href="/">sdfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5 font-bold text-2xl">Subscribe Us</div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto p-2 rounded bg-gray-800 text-white"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div>© 2024 Your Company. All rights reserved.</div>
      </div>
    </div>
  );
}
