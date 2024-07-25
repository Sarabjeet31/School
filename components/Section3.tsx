import Scrolling from "./customComponents/scrolling/Scrolling";
import Event from "./Event";
import { Button } from "./ui/button";

export default function Section3() {
  return (
    <div className="flex w-1/2 mx-auto my-12">
      <div className="flex-col w-1/3">
        <div>
          <Scrolling />
        </div>
        <div className="mt-12">
          <div className="flex-col justify-center items-center bg-gray-100">
            <div className='pb-4 flex justify-center text-2xl font-semibold p-2'>
              Downloads
            </div>
            <div className="overflow-hidden relative p-4 w-80 h-40">
              <div className="absolute space-y-2">
                <div>Datesheet</div>
                <div>Datesheet</div>
                <div>Datesheet</div>
                <div>Datesheet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-center text-4xl font-bold">
          Recent Events
        </div>
        <div>
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  );
}
