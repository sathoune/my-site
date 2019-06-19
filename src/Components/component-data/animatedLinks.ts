import {animatedAnchorProps} from "../AnimatedAnchor/AnimatedAnchor"

const linkedInProps: animatedAnchorProps = {
  id: "linkedin",
  href: "https://www.linkedin.com/in/michal-bargiel/",
  image: "/linkedin-blue.png",
  altImage: "31",
  altText: "LinkedIn logo"
}

const gitHubProps: animatedAnchorProps = {
  id: "github",
  href: "https://github.com/captainCapitalism",
  image: "/github-dark.png",
  altImage: "31",
  altText: "Github Logo"
}

const animatedLinks = [
  linkedInProps,
  gitHubProps
]

export default animatedLinks