const LoadingBar = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 flex-col gap-10">
      <span className="text-2xl font-bold">Loading...</span>
      <div className="w-50 h-1 bg-gray-200 overflow-hidden">
        <div className="h-full bg-black animate-loading"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
