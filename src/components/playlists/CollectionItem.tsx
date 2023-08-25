import Image from "next/image";


import Link from "next/link";

const CollectionItem = (props: {
  artist: string;
  albumName: string;
  image: string;
  type: string;
  active: boolean;
  id: number;
}) => {
  const imageStyle = (props: { type: string; active: boolean }) => {
    switch (props.type) {
      case "artist":
        return "rounded-full";

      case "album":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };
  return (
    <Link
      key={props.id}
      prefetch={false}
      href={props.active ? `/album/${props.id}` : "#"}
    >
      <div
        className={`flex flex-col h-60 p-3 drop-shadow-md mt-3 bg-linearRed hover:bg-bloodRed ${
          !props.active ? "opacity-40 pointer-events-none " : ""
        }`}
      >
        <div className="relative w-42 h-32">
          <Image
            src={props.image}
           fill
           style={{ objectFit: "cover" }}
            className={` ${imageStyle(props)}`}
            alt="xxx"
          />
        </div>
        <div className="flex flex-col pt-2">
          <h6 className="overflow-hidden truncate   text-escuro   mt-3">
            {props.albumName}
          </h6>
          <span className="line-clamp-2 text-link text-sm mt-1">
            {props.artist}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CollectionItem;
