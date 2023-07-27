import React from 'react';

interface IBadge {
  icon: React.JSX.Element;
}

export function Badge({ icon }: IBadge) {
  return (
    <div className="flex flex-row items-center justify-center rounded-md  bg-slate-600 p-3 text-2xl transition-all duration-200 ease-linear hover:animate-ping hover:ring-2 hover:ring-gray-400 sm:h-10 sm:w-20 sm:p-5 sm:text-4xl">
      {icon}
    </div>
  );
}
