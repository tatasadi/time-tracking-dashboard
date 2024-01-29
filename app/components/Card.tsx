import Image from "next/image"
import React from "react"
import ellipsis from "../../public/images/icon-ellipsis.svg"
import IconEllipsis from "./IconEllipsis"

interface CardProps {
  image: string
  title: string
  timeFrame: string
  timeFramesData: {
    [key: string]: {
      previous: number
      current: number
    }
  }
  className?: string
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  timeFrame,
  timeFramesData,
  className = "",
}) => {
  return (
    <div
      className={`relative  overflow-hidden rounded-[0.9375rem] pb-[2.37rem] leading-normal ${className}`}
    >
      <Image
        src={image}
        alt={`icon ${title}`}
        className="absolute -top-1 right-3 z-0 w-[4.875rem]"
      />
      <div className="bg-neutral-dark-blue hover:bg-neutral-medium-blue relative top-[2.37rem] z-10 flex cursor-pointer flex-col rounded-[0.9375rem] p-6 lg:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">{title}</h2>
          <IconEllipsis className="fill-neutral-pale-blue cursor-pointer hover:fill-white" />
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:items-start">
          <p className="text-[2rem] lg:text-[3.5rem]">
            {timeFramesData[timeFrame.toLowerCase()]["current"]}hrs
          </p>
          <p className="text-neutral-pale-blue text-[0.9375rem]">
            Last {timeFrame} -{" "}
            {timeFramesData[timeFrame.toLowerCase()]["previous"]}hrs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
