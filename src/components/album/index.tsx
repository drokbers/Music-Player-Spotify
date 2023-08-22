import Header from "../header";
import Cover from "./cover";
import TrackList from "./trackList";



const Body = () => {
    return(
        <div className="flex  flex-col w-full md:w-7/12 gap-5   pl-5 pr-5 sm:pl-20 sm:pr-20  items-center bg-gradient-to-t from-stone to-linearRed">
            <Header/>
            <Cover/>
            <TrackList/>
         

        </div>
    )
}
export default Body;