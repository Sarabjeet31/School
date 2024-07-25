import Banner from "@/components/customComponents/banner/Banner";

export default function MDM() {
  return (
    <div>
      <Banner title="Mid Day Meal - MDM" text="mid day meal - MDM"/>
      <div>
        <div className="w-2/3 mx-auto mt-12 text-lg space-y-4 mb-6">
          <div className="text-3xl flex justify-center">
            <b>Mid Day Meal - MDM</b>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quae provident sit adipisci minima quia placeat pariatur nobis delectus mollitia, optio dolores iure repellendus assumenda neque at ratione dicta quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non nulla eligendi dolorem quam explicabo tenetur fugit maiores, pariatur deleniti ratione! Aliquid distinctio asperiores quas laboriosam perspiciatis a, natus accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatum sit odit id cupiditate iure non blanditiis iste quaerat, totam inventore eos beatae mollitia, dolorem deserunt quis minus porro fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem provident! Quas, rerum! Ut harum similique, velit dolore mollitia pariatur? Culpa perspiciatis cupiditate quidem blanditiis id voluptates, ex sed praesentium.
          </div>
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
    </div>
  )
}