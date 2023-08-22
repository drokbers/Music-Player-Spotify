import Image from "next/image";

import { MichealTrack } from "@/assets/Images";
import Link from "next/link";

const CollectionItem = (props: {
  artist: string;
  albumName: string;
  image: string;
  type: string;
  active: boolean;
  id: number;
}) => {

  const imageStyle = (props: { type: string; active: boolean}) => {
    switch (props.type) {
        case 'artist':
            return 'rounded-full'

        case 'album':
            return 'rounded-xl'

        default:
            return 'rounded'
    }


    
}
  return (
    <Link key={props.id} href={`/album/${props.id}`}>
    <div  className={`flex flex-col p-3 drop-shadow-md mt-3 bg-linearRed hover:bg-bloodRed ${!props.active ? 'opacity-40 pointer-events-none' : ''}`} 
    >
      <div>
      <Image src={props.image} width={180} height={180} className={` ${imageStyle(props)}`} alt="xxx" />
      </div>
      <div className="flex flex-col">
        <h6 className="overflow-hidden truncate   text-escuro   mt-3">{props.albumName}</h6>
        <span className="line-clamp-2 text-link text-sm mt-1">{props.artist}</span>
        <span>{props.active}</span>
      </div>
    </div>
    </Link>
  );
};

export default CollectionItem;
