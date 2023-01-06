import React from "react"
import { FaWalking } from "react-icons/fa"
import { MdHighQuality } from "react-icons/md"
import { GiFlexibleStar } from "react-icons/gi"

const services = [
  {
    id: 1,
    icon: <MdHighQuality className="service-icon" />,
    title: "quality",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaWalking className="service-icon" />,
    title: "walking",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <GiFlexibleStar className="service-icon" />,
    title: "yielding",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]

export default services
