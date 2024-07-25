import Banner from "@/components/customComponents/banner/Banner";

export default function Mission() {
  return (
    <div>
      <Banner title="Mission Buniyaad" text="mission buniyaad"/>
      <div className="flex justify-center my-12">
        <b className="text-3xl">Mission Buniyaad</b>
      </div>
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-screen-lg">
          <div className="p-4 flex items-center justify-center text-lg">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas autem eum officiis voluptatem corrupti provident illum sit modi dolore reiciendis, omnis adipisci nobis. Repellat voluptatum quam sunt commodi? Harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam ullam labore aut, tenetur laboriosam et fugiat recusandae distinctio quisquam debitis neque nostrum officiis magnam alias quae illo vitae quidem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione labore in nulla. Unde accusantium amet tempore adipisci commodi quis praesentium, qui maiores et impedit hic laborum, libero veritatis, minima sit?
            </div>
          </div>
          <div className="bg-green-500 text-white p-4 flex items-center justify-center bg-parallax bg-cover bg-center">
            Pic 1
          </div>
          <div className="bg-red-500 text-white p-4 flex items-center justify-center bg-parallax bg-cover bg-center h-80">
            Pic 2
          </div>
          <div className="bg-yellow-500 text-white p-4 flex items-center justify-center bg-parallax bg-cover bg-center">
            Pic 2
          </div>
        </div>
      </div>
    </div>
  )
}