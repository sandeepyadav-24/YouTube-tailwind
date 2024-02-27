import SearchBar from "./SearchBar";
const AppBar = () => {
  return (
    <div className="flex justify-between">
      <div>Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>SignIn</div>
    </div>
  );
};
export default AppBar;
