"use client"
import Image from "next/image"
import Reference from "./components/Reference"
import jeremy from "../public/images/image-jeremy.png"
import iconWork from "../public/images/icon-work.svg"
import iconPlay from "../public/images/icon-play.svg"
import iconStudy from "../public/images/icon-study.svg"
import iconExercise from "../public/images/icon-exercise.svg"
import iconSocial from "../public/images/icon-social.svg"
import iconSelfCare from "../public/images/icon-self-care.svg"
import Card from "./components/Card"
import data from "./data.json"
import { useState } from "react"

const cardData = data.map((item) => {
  let image, className
  switch (item.title) {
    case "Work":
      image = iconWork
      className = "bg-primary-orange"
      break
    case "Play":
      image = iconPlay
      className = "bg-primary-turkis"
      break
    case "Study":
      image = iconStudy
      className = "bg-primary-red"
      break
    case "Exercise":
      image = iconExercise
      className = "bg-primary-green"
      break
    case "Social":
      image = iconSocial
      className = "bg-primary-violet"
      break
    case "Self Care":
      image = iconSelfCare
      className = "bg-primary-yellow"
      break
    default:
      image = null
  }

  return {
    ...item,
    image,
    className,
  }
})

export default function Home() {
  const [timeFrame, setTimeFrame] = useState("Weekly")

  return (
    <main className="flex h-full min-h-screen w-full max-w-5xl flex-col items-center px-4 pt-20 lg:min-h-0 lg:pt-32">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.87rem]">
        <div className="bg-neutral-dark-blue flex flex-col rounded-[0.9375rem] sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="bg-primary-blue flex grow items-center gap-4 rounded-[0.9375rem] p-6 lg:flex-col lg:items-start lg:p-8">
            <div className="w-[4rem] lg:w-[4.5rem]">
              <Image
                src={jeremy}
                alt="Jeremy Robson"
                className="rounded-full border-2 border-white"
                layout="responsive"
              />
            </div>
            <div>
              <h1 className="text-neutral-pale-blue text-[0.9375rem] leading-normal">
                Report for
              </h1>
              <h2 className="text-2xl leading-normal lg:text-[2.5rem]">
                Jeremy Robson
              </h2>
            </div>
          </div>
          <nav>
            <ul className="text-neutral-desaturated-blue flex justify-between gap-2 p-6 lg:flex-col lg:text-lg">
              <li
                className={`nav-item ${timeFrame === "Daily" ? "active" : ""}`}
                onClick={() => setTimeFrame("Daily")}
              >
                Daily
              </li>
              <li
                className={`nav-item ${timeFrame === "Weekly" ? "active" : ""}`}
                onClick={() => setTimeFrame("Weekly")}
              >
                Weekly
              </li>
              <li
                className={`nav-item ${
                  timeFrame === "Monthly" ? "active" : ""
                }`}
                onClick={() => setTimeFrame("Monthly")}
              >
                Monthly
              </li>
            </ul>
          </nav>
        </div>
        {cardData.map((card) => (
          <Card
            key={card.title}
            className={card.className}
            image={card.image}
            title={card.title}
            timeFrame={timeFrame}
            timeFramesData={card.timeframes}
          />
        ))}
      </div>
      <Reference />
    </main>
  )
}
