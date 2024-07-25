import Banner from "@/components/customComponents/banner/Banner";
import Scrolling from "@/components/customComponents/scrolling/Scrolling";

export default function Admission() {
  return (
    <div>
      <Banner title="Admission" text="admission" />
      <div>
        <div className="flex text-2xl justify-center mt-16 mb-8">
          <b>Admission</b>
        </div>
        <div>
          <div className="flex justify-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-screen-xl">
              <div className="p-4 flex items-center justify-center bg-green-500">
                Picture
              </div>
              <div className="p-4 flex items-center justify-center text-base">
                <div className="space-y-3">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam ratione sequi soluta nostrum corporis incidunt sint officia, magnam sed voluptatum sapiente deleniti tempore minus quibusdam eius dolore rerum iste?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum mollitia quidem excepturi dolore itaque quo, cupiditate sapiente beatae laboriosam nemo fugiat iste soluta? Exercitationem commodi minima neque ducimus pariatur.
                  </div>
                  <div>
                    <b>Documents to be submitted</b>
                    <ul className="list-disc pl-5 marker:inside">
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus natus dolorum reiciendis id, reprehenderit dolore non maiores. Officiis dolore autem, amet dolores excepturi optio ut non fuga temporibus. Eos, eveniet.</li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in sit animi aut tempora non inventore perferendis molestiae vel nesciunt suscipit quia dolore nostrum ipsam unde provident debitis amet nihil!
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>Documents to be submitted</b>
                    <ul className="list-disc pl-5 marker:inside">
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus natus dolorum reiciendis id, reprehenderit dolore non maiores. Officiis dolore autem, amet dolores excepturi optio ut non fuga temporibus. Eos, eveniet.</li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in sit animi aut tempora non inventore perferendis molestiae vel nesciunt suscipit quia dolore nostrum ipsam unde provident debitis amet nihil!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-red-500 text-white p-4 flex items-center justify-center">
                Picture
              </div>
              <div className="bg-yellow-500 text-white p-4 flex items-center justify-center">
                Picture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
