// servicesData.js
import { Settings, Sun, Activity, Code } from 'lucide-react';

export const servicesData = [
  {
    title: "AI Solutions",
    description:
      "We provide cutting-edge AI solutions to help businesses automate and optimize their processes, making them more efficient and data-driven.",
    icon: <Settings className="text-orange-500" />,
    svgIcon: (
      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        stroke="currentColor"
        fill="none"
        className="mx-auto"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    title: "ICT Products",
    description:
      "Our ICT products provide seamless communication and technological solutions to businesses, enhancing their productivity and connectivity.",
    icon: <Settings className="text-green-500" />,
    svgIcon: (
      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        stroke="currentColor"
        fill="none"
        className="mx-auto"
        aria-hidden="true"
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
        <line x1="16" y1="8" x2="2" y2="22"></line>
        <line x1="17.5" y1="15" x2="9" y2="15"></line>
      </svg>
    ),
  },
  {
    title: "Software Services",
    description:
      "Our software services include custom development and enterprise solutions tailored to your business's unique needs, from start to finish.",
    icon: <Code className="text-purple-500" />,
    svgIcon: (
      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        stroke="currentColor"
        fill="none"
        className="mx-auto"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: "Medical Health",
    description:
      "We provide Medical products at an affordable offerings to the medical practitioners thereby serving the mankind.",
    icon: <Activity className="text-yellow-500" />,
  },
  {
    title: "Customised Project Based Solutions",
    description:
      "We provide end to end tailor made project based solutions as per the requirement of the customers.",
    icon: <Settings className="text-yellow-500" />,
  },
  {
    title: "Solar Power Solution",
    description:
      "We promote green energy customized solutions to our customers to reduce our carbon footprints.",
    icon: <Sun className="text-purple-500" />,
  },
];
