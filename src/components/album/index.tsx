import Header from "../header";
import Cover from "./cover";
import TrackList from "./trackList";

interface AlbumProps {
    id: string;
  }

const Album  = ({ id }: AlbumProps) =>{
    return(
        <div className="flex  flex-col w-full md:w-7/12 gap-5   pl-5 pr-5 sm:pl-20 sm:pr-20  items-center bg-gradient-to-t from-stone to-linearRed">
            <Header/>
            <Cover id={id} />
            <TrackList id={id}/>
         

        </div>
    )
}
export default Album;