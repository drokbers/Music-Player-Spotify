import SearchBar from "./searchBar";

const Header = () => {
  return (
    <div className="flex justify-between text-neutral w-full h-[70px] text-lg pt-11">
      <div className="flex gap-9 ">
        <span>Music </span>
        <span>Podcast </span>
        <span>Live </span>
        <span>Radio </span>
      </div>

      <SearchBar />
    </div>
  );
};
export default Header;
