
import CollectionItem from "../CollectionItem";

const Collections = (props: {
  title: string;
  items: {
    id: number;
    artist: string;
    albumName: string;
    description: string;
    image: string;
    type: string;
    src: string;
    active: boolean;
  
  }[];
}) => {
  return (
    <div className=" mt-4  ">
        <div className="flex  items-center justify-between ">
        <h2 className="text-2xl text-white font-semibold tracking-tight hover:underline">{props.title}</h2>
        <span className={"text-xs hover:underline font-semibold uppercase text-link tracking-wider"} >SEE ALL</span>

        </div>
     
      <div className="grid grid-cols-4  gap-x-6 ">
        {props.items.slice(-4).map((item) => (
          <CollectionItem
            key={item.id}
            id={item.id}
            artist={item.artist}
            albumName={item.albumName}
            image={item.image}
            type={item.type}
            active={item.active}
            
          />
        ))}
      </div>
    </div>
  );
};
export default Collections;
