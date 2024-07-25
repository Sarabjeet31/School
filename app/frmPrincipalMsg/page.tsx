import Banner from "@/components/customComponents/banner/Banner";

export default function msgPrincipal() {
  return (
    <div>
      <div>
        <Banner title="Principal's Mesaage" text="PM"/>
      </div>
      <div className="flex justify-center text-3xl mt-16 mb-5">
        <b>Principal's Message</b>
      </div>
      <div className="flex justify-center p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-screen-lg">
          <div className="bg-red-500 text-white p-4 flex items-center justify-center bg-parallax bg-cover bg-center">
            Picture
          </div>
          <div className=" p-4 flex items-center justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero eos incidunt consequuntur tempore explicabo omnis aliquid ipsam modi? Aperiam quis quod, doloribus rem atque impedit at commodi delectus vero?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit, ratione nobis asperiores ullam ut minima eligendi delectus nemo quisquam vero deserunt quas dignissimos culpa ipsam dolor modi architecto distinctio.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt saepe similique provident. Ipsum, perspiciatis delectus. Totam temporibus laudantium explicabo architecto, atque exercitationem! Iure esse, ducimus vero quae tempore voluptates nihil?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, pariatur? Corporis fugiat ea hic nulla commodi deserunt labore autem iusto tempore totam quasi nam veritatis, saepe est at accusamus temporibus!
          </div>
        </div>
      </div>
    </div>
  )
}