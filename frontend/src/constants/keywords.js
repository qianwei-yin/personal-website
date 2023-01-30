import React from "react"
import { FaWalking } from "react-icons/fa"
import { MdHighQuality } from "react-icons/md"
import { GiFlexibleStar } from "react-icons/gi"

const services = [
  {
    id: 1,
    icon: <MdHighQuality className="service-icon" />,
    title: "quality",
    text: `I consider myself to be a high-quality developer. I strive for excellence in the structure, user experience, and styling of my projects, but I also prioritize when time is of the essence. I think my passion for developing work and eagerness to learn will make me be a high-quality developer in the future.`,
  },
  {
    id: 2,
    icon: <FaWalking className="service-icon" />,
    title: "walking",
    text: `I'm not shy about identifying myself as a transcoding developer. I consider it a blessing in my home country that a Gen Z could have fully explored his/her interests at the undergraduate level. I didn't find my career path until I finished my undergraduate degree. But I kept walking forward, in accelerated pursuit of my role models.`,
  },
  {
    id: 3,
    icon: <GiFlexibleStar className="service-icon" />,
    title: "yielding",
    text: `I think that being a yielding, a jack-of-all-trades in my beginning of career is not a bad thing. I am definitely a lifelong learner and I love to learn about all dimensions and aspects of knowledge. It would be a worthwhile pursuit to gradually decrease the divergent points of my career path over a decade or so.`,
  },
]

export default services
