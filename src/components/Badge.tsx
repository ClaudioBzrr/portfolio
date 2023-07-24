import React from 'react';

interface IBadge {
  icon: React.JSX.Element;
}

export function Badge({ icon }: IBadge) {
  return (
    <div className="sm:p-5 p-3 transition-all ease-linear duration-200  sm:w-20 sm:h-10 bg-slate-600 flex flex-row items-center justify-center rounded-md sm:text-4xl text-2xl hover:ring-2 hover:ring-gray-400 hover:animate-ping">
      {icon}
    </div>
  );
}
