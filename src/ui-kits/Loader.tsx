export default function Loader() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue transition-all">
        <hr className="transition-all animate-changewidth duration-1000 absolute left-0 top-1/2" />
        <h1 className="text-2xl font-semibold">Loading ...</h1>
        <hr className="transition-all animate-changewidth duration-1000 absolute right-0 top-1/2" />
      </div>
    </>
  );
}
