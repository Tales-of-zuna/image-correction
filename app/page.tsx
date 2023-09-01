"use client";

const Home = () => {
  return (
    <div className="h-screen bg-stone-100 flex justify-center items-center">
      <div className=" text-stone-600 bg-white w-1/2 rounded-2xl space-y-4 shadow-xl p-8">
        <p className="text-4xl text-center font-bold text-stone-700">
          Photo correction
        </p>
        <p className="text-center">
          You have 5 generations left today. Your generations will renew in 9
          hours and 28 minutes.
        </p>
        <div className="rounded-xl space-y-4 flex justify-center flex-col items-center border-stone-200 p-8 border-dashed border-4">
          <button className="bg-stone-800 transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 text-xl text-white font-bold px-4 py-2 rounded-xl">
            Upload Image
          </button>
          <p className="text-stone-500">...or drag and drop an image.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
