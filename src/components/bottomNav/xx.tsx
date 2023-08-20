// "use client";
// import Image from "next/image";
// import ReactPlayer from "react-player";
// import { getTrackBackground, Range } from "react-range";
// import { useMemo, useRef, useState } from "react";

// import secondsToTime from "@/utils/time";
// import ClientOnly from "@/utils/clientOnly";

// import { MichealPoster } from "@/assets/Images";
// import {
//   RepeatIcon,
//   RandomIcon,
//   BackIcon,
//   PlayIcon,
//   NextIcon,
// } from "@/assets/Icons";

// const BottomNav = () => {
//   const [playing, setPlaying] = useState(true);
//   const [duration, setDuration] = useState(0);
//   const [playedSeconds, setPlayedSeconds] = useState(0);

//   const playerRef = useRef<ReactPlayer>(null);


//   return (
//     <div className=" flex justify-between items-center  rounded-md absolute bottom-0  h-20 w-full gap-2 text-escuro  bg-bloodRed">
//       <div className="min-w-[11.25rem] w-[%30]">sol</div>

//       <div className="flex flex-col item-center px-4 t-2 max-w-[45.125rem] w-[40%]">
//         <div className="flex  items-center  gap-x-2">
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={RepeatIcon} alt="Micheal Jackson" />
//           </button>
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={BackIcon} alt="Micheal Jackson" />
//           </button>
//           <button
//             onClick={() => setPlaying(!playing)}
//             className="w-10 h-10 flex items-center  bg-bordo rounded-full hover:scale-[1.06] justify-center text-opacity-70 hover:text-opacity-100"
//           >
//             <Image src={PlayIcon} alt="Micheal Jackson" />
//           </button>
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={NextIcon} alt="Micheal Jackson" />
//           </button>
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={RandomIcon} alt="Micheal Jackson" />
//           </button>
//         </div>
//         <div className="w-full flex items-center mt-1.5 gap-x-2">
//           <ClientOnly>
//             <ReactPlayer
//               ref={playerRef}
//               url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
//               playing={playing}
//               onDuration={(d) => setDuration(d)}
//               onProgress={({ playedSeconds }) =>
//                 setPlayedSeconds(playedSeconds)
//               }
//               width="0%"
//               height="0%"
//               style={{ display: "none" }}
//             />
//           </ClientOnly>

//           <div className="text-opacity-70">{secondsToTime(playedSeconds)}</div>

//           <Range
//             values={[playedSeconds]}
//             step={0.1}
//             min={0}
//             max={duration || 1}
//             onChange={(values: number[]) => {
//               if (playerRef.current && values.length > 0) {
//                   playerRef.current.seekTo(values[0], 'seconds');
//               }
//           }}
//             renderTrack={({ props, children }) => (
//               <div
//                 onMouseDown={props.onMouseDown}
//                 onTouchStart={props.onTouchStart}
//                 className="w-full h-7 flex group"
//                 style={props.style}
//               >
//                 <div
//                   ref={props.ref}
//                   className="h-1 w-full rounded-md self-center"
//                   style={{
//                     background: getTrackBackground({
//                       values: [playedSeconds],
//                       colors: ["#1db954", "#535353"],
//                       min: 0,
//                       max: duration || 1,
//                     }),
//                   }}
//                 >
//                   {children}
//                 </div>
//               </div>
//             )}
//             renderThumb={({ props, isDragged }) => (
//               <div
//                 {...props}
//                 className={`h-3 w-3 rounded-full bg-white ${
//                   !isDragged ? "opacity-0" : ""
//                 } group-hover:opacity-100`}
//                 style={{
//                   ...props.style,

//                   boxShadow: "0px 2px 6px #AAA",
//                 }}
//               ></div>
//             )}
       
//           />

//           <div className="text-opacity-70">{secondsToTime(duration || 0)}</div>
//         </div>
//       </div>

//       <div className="min-w-[11.25rem] w-[%30] flex justify-end">sag</div>
//     </div>
//   );
// };

// export default BottomNav;
