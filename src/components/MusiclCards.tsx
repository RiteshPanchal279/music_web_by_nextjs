"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const cardList = [
  {
    quote:
      "Music is the heartbeat of the soul; it connects us in ways words cannot.",
    name: "John Mayer",
    title: "Singer-Songwriter & Guitarist",
  },
  {
    quote:
      "A great song has the power to transport you to another place, bringing back memories and emotions like nothing else.",
    name: " Hans Zimmer",
    title: "Film Composer & Music Producer",
  },
  {
    quote:
      "Live music creates a connection between the artist and the audience that is truly magical ",
    name: " Ed Sheeran",
    title: "Singer-Songwriter & Musician ",
  },
  {
    quote:
      "A world without music would be a world without color—dull, empty, and lifeless. ",
    name: " Beyoncé",
    title: "Singer, Performer & Businesswoman ",
  },
  {
    quote:
      "The right song at the right moment can change your entire day, maybe even your life. ",
    name: " Taylor Swift",
    title: "Singer-Songwriter & Music Icon ",
  },
];

function MusiclCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-14">
        Hear our Harmony:Voice of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={cardList}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusiclCards;
