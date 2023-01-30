import React from "react"
import { FaLinkedin, FaSpotify } from "react-icons/fa"
import { SiLeetcode, SiGithub } from "react-icons/si"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/qianweiyin/",
  },
  {
    id: 2,
    icon: <SiGithub className="social-icon"></SiGithub>,
    url: "https://github.com/qianwei-yin",
  },
  {
    id: 3,
    icon: <SiLeetcode className="social-icon"></SiLeetcode>,
    url: "https://leetcode.com/conway22/",
  },
  {
    id: 4,
    icon: <FaSpotify className="social-icon"></FaSpotify>,
    url: "https://open.spotify.com/user/315mdpszp5q5zjrkd5k2tal6gzku",
  },
]

export default data
