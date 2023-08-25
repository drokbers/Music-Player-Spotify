// "use client";
// import Image from "next/image";
// import ReactPlayer from "react-player";
// import { useEffect, useMemo, useRef, useState } from "react";

// import secondsToTime from "@/utils/time";

// import CustomRange from "@/layout/CustomRange";
// import ClientOnly from "@/utils/ClientOnly";

// import { MichealPoster } from "@/assets/Images";
// import {
//   RepeatIcon,
//   RandomIcon,
//   BackIcon,
//   PlayIcon,
//   NextIcon,
//   PauseIcon,
//   VolumeMutedIcon,
//   VolumeFullIcon,
//   VolumeNormalIcon,
//   VolumeLowIcon,
// } from "@/assets/Icons";
// import { useDispatch, useSelector } from "react-redux";
// import { setPlaying } from "@/redux/features/PlayerSlice";

// const BottomNav = () => {
//   const dispatch = useDispatch();
//   const [playingPlayer, setPlayingPlayer] = useState<boolean>(false);
//   const [duration, setDuration] = useState(0);
//   const [playedSeconds, setPlayedSeconds] = useState(0);
//   const [volume, setVolume] = useState(0.5);

//   const playerRef = useRef<ReactPlayer>(null);

//   const { current } = useSelector((state: any) => state.player);

//   const { playing } = useSelector((state: any) => state.player);

//   useEffect(() => {
//     dispatch(setPlaying(playingPlayer));
//   }, [playingPlayer]);

//   const volumeIcon = useMemo(() => {
//     if (volume === 0) {
//       return VolumeMutedIcon;
//     } else if (volume < 0.5) {
//       return VolumeLowIcon;
//     } else if (volume < 1) {
//       return VolumeNormalIcon;
//     } else {
//       return VolumeFullIcon;
//     }
//   }, [volume]);

//   return (
//     <div className=" flex justify-center xs:justify-between  rounded-t-3xl items-center  h-20 absolute top-0  w-full gap-2 text-escuro  bg-bloodRed">
//       <div className="hidden xs:flex min-w-[11.25rem] w-[%30]">
//         {current && (
//           <div className="flex  items-center ">
//             <div className="w-20  pl-5 mr-3  ">
//               <Image
//                 src={current?.cover}
//                 width={60}
//                 height={60}
//                 alt="Micheal Jackson"
//               />
//             </div>

//             <div>
//               <h6 className="text-sm ">{current.title}</h6>
//               <p className="text-[0.688rem] text-white text-opacity-70">
//                 {current.artist}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="flex flex-col item-center  px-4 t-2 max-w-[45.125rem] w-[40%]">
//         <div className="flex  items-center justify-center  gap-x-2">
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={RepeatIcon} alt="Micheal Jackson" />
//           </button>
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={BackIcon} alt="Micheal Jackson" />
//           </button>
//           <button
//             onClick={() => setPlayingPlayer(!playingPlayer)}
//             className="w-10 h-10 flex items-center  bg-bordo rounded-full hover:scale-[1.06] justify-center text-opacity-70 hover:text-opacity-100"
//           >
//             <Image src={playing ? PauseIcon : PlayIcon} alt="Micheal Jackson" />
//           </button>
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={NextIcon} alt="Micheal Jackson" />
//           </button>
//           <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
//             <Image src={RandomIcon} alt="Micheal Jackson" />
//           </button>
//         </div>
//         <div className="w-full flex items-center  gap-x-2">
//           <ClientOnly>
//             <ReactPlayer
//               ref={playerRef}
//               url={current?.src}
//               playing={playing}
//               volume={volume}
//               muted={volume === 0}
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

//           <CustomRange
//             value={[playedSeconds]}
//             step={0.1}
//             min={0}
//             max={duration || 1}
//             onChange={(values: number[]) => {
//               if (playerRef.current && values.length > 0) {
//                 playerRef.current.seekTo(values[0], "seconds");
//               }
//             }}
//           />

//           <div className="text-opacity-70">{secondsToTime(duration || 0)}</div>
//         </div>
//       </div>

//       {/* right */}
//       <div className="hidden  min-w-[9.25rem] md:min-w-[11.25rem] w-[%20] xs:flex  pr-14 items-center justify-center xs:justify-end">
//         <button
//           onClick={() => {
//             if (volume === 0) {
//               setVolume(0.5);
//             } else {
//               setVolume(0);
//             }
//           }}
//           className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
//         >
//           <Image src={volumeIcon} alt="Volume" />
//         </button>

//         <div className=" w-[5.813rem] max-w-full">
//           <CustomRange
//             value={[volume * 100]}
//             step={1}
//             min={0}
//             max={100}
//             onChange={(values: number[]) => {
//               setVolume(values[0] / 100);
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BottomNav;
