import React, { useState } from "react";

const RadialTimelineInteractive = ({ timelineData }) => {
  const [activeItem, setActiveItem] = useState(null);
  const radius = 200;

  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;

    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div className="relative w-[550px] h-[550px] rounded-full border border-white/10">

        {/* Center Orb / Detail Card */}
        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          {activeItem ? (
            <div className="w-72 bg-zinc-900 border border-white/10 rounded-xl p-5 text-white text-center shadow-xl">
              <h3 className="text-lg font-bold">{activeItem.title}</h3>
              <p className="text-sm text-gray-400">{activeItem.date}</p>
              <p className="mt-3 text-sm">{activeItem.content}</p>

              <button
                onClick={() => setActiveItem(null)}
                className="mt-4 text-xs text-red-400 hover:text-red-300"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg" />
          )}
        </div>

        {/* Rotating Orbit Nodes */}
        <div className="absolute inset-0 animate-spin-slow">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const pos = getPosition(index, timelineData.length);

            return (
              <div
                key={item.id}
                className="absolute flex flex-col items-center cursor-pointer"
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setActiveItem(item)}
              >
                <div
                  className={`w-14 h-14 rounded-full border flex items-center justify-center transition ${
                    activeItem?.id === item.id
                      ? "bg-white text-black border-white"
                      : "bg-black text-white border-white/30"
                  }`}
                >
                  <Icon size={18} />
                </div>

                <p className="text-white mt-2 text-sm font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default RadialTimelineInteractive;