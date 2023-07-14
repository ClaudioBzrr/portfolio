import React from 'react';

interface IBadge {
  icon: React.JSX.Element;
}

export function Badge({ icon }: IBadge) {
  return (
    <div className="p-5 transition-all ease-linear duration-200  w-20 h-10 bg-slate-600 flex flex-row items-center justify-center rounded-md text-4xl hover:ring-2 hover:ring-gray-400 hover:animate-ping">
      {icon}
    </div>
  );
}
