import Image from "next/image";

import { MichealTrack } from "@/assets/Images";

const TrackList = () => {
  return (
    <div className=" flex flex-col  max-w-full    h-full ">
      <div className="flex w-full   mt-5 text-lg justify-between text-escuro">
        <span>Popular</span>
        <span className=""> See All </span>
      </div>

      <div id="music-list" className="pt-3   max-h-full overflow-scroll  h-[400px] md:h-[300px]">
        <table className="text-left w-full text-bej">
          <thead className="uppercase">
            <tr>
              <th scope="col" className=" py-3">
                #
              </th>
              <th scope="col" className="px-3 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Playing
              </th>
              <th scope="col" className="px-0 py-3">
                Time
              </th>
              <th scope="col" className=" text-right px-0 py-3">
                Album
              </th>
            </tr>
          </thead>
          <tbody className=" max-h-none">
            <tr>
              <th className=" py-4">1</th>
              <td className="px-3 py-4">
                <Image src={MichealTrack} width={40} height={40} alt="xxx" />
              </td>
              <td className="px-6 py-4">Billie Jean</td>
              <td className="px-6 py-4">1.040.811.084</td>
              <td className="px-0 py-4">4:53</td>
              <td className="px-0 py-4 text-right ">Thriller 25 SupThrille</td>
            </tr>
            <tr>
              <th className=" py-4">2</th>
              <td className="px-3 py-4">
                <Image src={MichealTrack} width={40} height={40} alt="xxx" />
              </td>
              <td className="px-6 py-4">Billie Jean</td>
              <td className="px-6 py-4">1.040.811.084</td>
              <td className="px-0 py-4">4:53</td>
              <td className="px-0 py-4 text-right ">Thriller 25 SupThrille</td>
            </tr>
            <tr>
              <th className=" py-4">3</th>
              <td className="px-3 py-4">
                <Image src={MichealTrack} width={40} height={40} alt="xxx" />
              </td>
              <td className="px-6 py-4">Billie Jean</td>
              <td className="px-6 py-4">1.040.811.084</td>
              <td className="px-0 py-4">4:53</td>
              <td className="px- py-4 text-right ">Thriller 25 SupThrille</td>
            </tr>

            <tr>
              <th className=" py-4">4</th>
              <td className="px-3 py-4">
                <Image src={MichealTrack} width={40} height={40} alt="xxx" />
              </td>
              <td className="px-6 py-4">Billie Jean</td>
              <td className="px-6 py-4">1.040.811.084</td>
              <td className="px-0 py-4">4:53</td>
              <td className="px-0 py-4 text-right ">Thriller 25 SupThrille</td>
            </tr>

            <tr>
              <th className=" py-4">2</th>
              <td className="px-3 py-4">
                <Image src={MichealTrack} width={40} height={40} alt="xxx" />
              </td>
              <td className="px-6 py-4">Billie Jean</td>
              <td className="px-6 py-4">1.040.811.084</td>
              <td className="px-0 py-4">4:53</td>
              <td className="px-0 py-4 text-right ">Thriller 25 SupThrille</td>
            </tr>

            <tr>
              <th className=" py-4">2</th>
              <td className="px-3 py-4">
                <Image src={MichealTrack} width={40} height={40} alt="xxx" />
              </td>
              <td className="px-6 py-4">Billie Jean</td>
              <td className="px-6 py-4">1.040.811.084</td>
              <td className="px-0 py-4">4:53</td>
              <td className="px-0 py-4 text-right ">Thriller 25 SupThrille</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TrackList;
