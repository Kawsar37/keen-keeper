import Friends from "./components/Friends";

export default function Home() {
  console.log("App Render");

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto px-5 md:px-15 lg:px-30 ">
        <div className="py-10 md:py-20">
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
              <p className="text-3xl font-bold">8</p>
              <p className="text-gray-500">Total Friends</p>
            </div>
            <div className="space-y-2 p-8 text-center bg-white rounded-lg ring-1 ring-base-300">
              <p className="text-3xl font-bold">3</p>
              <p className="text-gray-500">On Track</p>
            </div>
            <div className="space-y-2 p-8 text-center bg-white rounded-lg ring-1 ring-base-300">
              <p className="text-3xl font-bold">3</p>
              <p className="text-gray-500">Need Attention</p>
            </div>
            <div className="space-y-2 p-8 text-center bg-white rounded-lg ring-1 ring-base-300">
              <p className="text-3xl font-bold">12</p>
              <p className="text-gray-500">Interaction This Month</p>
            </div>
          </div>

          <div className="border-b border-gray-500/20 my-10"></div>

          <Friends />
        </div>
      </div>
    </div>
  );
}
