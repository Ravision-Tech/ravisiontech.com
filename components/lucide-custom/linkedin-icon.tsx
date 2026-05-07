import { createLucideIcon, type LucideIcon, type LucideProps } from "lucide-react";

const LinkedInIconBase = createLucideIcon("linkedin", [
  [
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      stroke: "none",
      d: [
        "M20.5219 22C21.3381 22 22 21.3586 22 20.5673V3.4327C22 2.6417 21.3381 2 20.5219 2H3.4778C2.6616 2.0001 2 2.6417 2 3.4327V20.5673C2 21.3586 2.6616 21.9999 3.4778 22H20.5219Z",
        "M5.0418 9.711H8.0627V18.742H5.0418V9.711Z",
        "M6.5325 8.4779C5.5188 8.4779 4.8632 7.7845 4.8632 6.9179C4.8632 6.0317 5.5389 5.3574 6.5722 5.3574C7.6056 5.3574 8.2416 6.0318 8.2612 6.9179C8.2611 7.7845 7.6055 8.4779 6.5521 8.4779H6.5325Z",
        "M9.7341 18.742C9.7343 18.7047 9.7737 10.5566 9.7341 9.711H12.755V10.9902C13.1564 10.3748 13.8746 9.4992 15.4774 9.4992C17.4648 9.4992 18.9551 10.7899 18.9551 13.5638V18.742H15.9345V13.9107C15.9345 12.6966 15.4973 11.8684 14.4043 11.8683C13.5698 11.8683 13.0727 12.4269 12.8543 12.9662C12.7745 13.1592 12.7548 13.4289 12.7548 13.6988V18.742H9.7341Z",
      ].join(" "),
      key: "linkedin-filled",
    },
  ],
]);

const LinkedInIcon = ((props: LucideProps) => <LinkedInIconBase aria-hidden="true" {...props} />) as LucideIcon;

export default LinkedInIcon;
