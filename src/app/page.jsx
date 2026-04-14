import { Suspense } from "react";
import Friends from "./components/Friends";
import Loading from "./components/Loading";

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  return res.json();
};

const friendsPromise = fetchData();

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto px-5 md:px-15 lg:px-30 ">
        <div className="mt-20">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="text-gray-500">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn p-btn mt-4">+ Add a Friend</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="space-y-2 p-8 text-center bg-white rounded-lg ring-1 ring-base-300">
              <p className="text-3xl font-bold">10</p>
              <p className="text-gray-500">Total Friends</p>
            </div>
            <div className="space-y-2 p-8 text-center bg-white rounded-lg ring-1 ring-base-300">
              <p className="text-3xl font-bold">10</p>
              <p className="text-gray-500">Total Friends</p>
            </div>
            <div className="space-y-2 p-8 text-center bg-white rounded-lg ring-1 ring-base-300">
              <p className="text-3xl font-bold">10</p>
              <p className="text-gray-500">Total Friends</p>
            </div>
            <div className="space-y-2 p-8 text-center bg-white rounded-lg ring-1 ring-base-300">
              <p className="text-3xl font-bold">10</p>
              <p className="text-gray-500">Total Friends</p>
            </div>
          </div>

          <div className="border-b border-gray-500/20 my-10"></div>

          <Suspense fallback={<Loading />}>
            <Friends friendsPromise={friendsPromise} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
