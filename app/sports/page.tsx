import Banner from "@/components/customComponents/banner/Banner";

export default function Sports() {
  return (
    <div>
      <Banner title="Sports" text="sports"/>
      <div className="flex justify-center text-4xl font-bold my-12">
        Sports pics
      </div>
      <div>
        <div className="flex justify-center p-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-screen-lg">
            <div className="p-4 bg-blue-500 flex items-center justify-center text-lg bg-parallax h-96 bg-cover bg-center">
              pic 0
            </div>
            <div className="bg-green-500 text-white p-4 flex items-center justify-center bg-parallax h-96 bg-cover bg-center">
              Pic 1
            </div>
            <div className="bg-red-500 text-white p-4 flex items-center justify-center bg-parallax h-96 bg-cover bg-center">
              Pic 2
            </div>
            <div className="bg-yellow-500 text-white p-4 flex items-center justify-center bg-parallax h-96 bg-cover bg-center">
              Pic 2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}