import {animatedAnchorProps} from "../AnimatedAnchor/AnimatedAnchor"

const linkedInProps: animatedAnchorProps = {
  href: "https://www.linkedin.com/in/michal-bargiel/",
  image: "/linkedin-white.png",
  altImage: "linkedin-link",
  altText: "LinkedIn logo"
}

const gitHubProps: animatedAnchorProps = {
  href: "https://github.com/captainCapitalism",
  image: "/github-light.png",
  altImage: "github-link",
  altText: "Github Logo"
}

const animatedLinks = [
  linkedInProps,
  gitHubProps
]

export default animatedLinks