import { useState } from "react";

export default function Testimonial({ content, avatar, name }) {
  return (
    <div
      className={
        "bg-card-light dark:bg-card-dark rounded-md p-3 md:p-5 flex flex-col gap-2 shadow-xl"
      }
    >
      <div className="text-[10px] md:!text-xs">{content}</div>
      <div className="mt-auto">
        <div className="flex gap-1 text-[10px] md:text-xs items-center">
          <img className="w-5 rounded-full" src={avatar} />
          <span className="font-bold">{name}</span>
        </div>
      </div>
    </div>
  );
}
