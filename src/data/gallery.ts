export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export const allImages: GalleryImage[] = [
  {
    id: 1,
    src: "/placeholder.svg",
    alt: "Art Competition",
    title: "Art Competition 2025",
    category: "Competition",
  },
  // {
  //   id: 2,
  //   src: "/placeholder.svg",
  //   alt: "Robotics Workshop",
  //   title: "Robotics Workshop",
  //   category: "Workshop",
  // },
  // {
  //   id: 3,
  //   src: "/placeholder.svg",
  //   alt: "Art Exhibition",
  //   title: "Annual Art Exhibition",
  //   category: "Event",
  // },
  // {
  //   id: 4,
  //   src: "/placeholder.svg",
  //   alt: "Debate Competition",
  //   title: "Inter-Club Debate",
  //   category: "Competition",
  // },
  // {
  //   id: 5,
  //   src: "/placeholder.svg",
  //   alt: "Coding Bootcamp",
  //   title: "Weekend Coding Bootcamp",
  //   category: "Workshop",
  // },
  // {
  //   id: 6,
  //   src: "/placeholder.svg",
  //   alt: "Cultural Fest",
  //   title: "Cultural Fest 'Sanskriti'",
  //   category: "Event",
  // },
  // {
  //   id: 7,
  //   src: "/placeholder.svg",
  //   alt: "Photography Contest",
  //   title: "Shutterbugs Contest",
  //   category: "Competition",
  // },
  // {
  //   id: 8,
  //   src: "/placeholder.svg",
  //   alt: "Guest Lecture",
  //   title: "AI & Future Tech",
  //   category: "Workshop",
  // },
  // {
  //   id: 9,
  //   src: "/placeholder.svg",
  //   alt: "Annual Sports Meet",
  //   title: "Sports Day 2023",
  //   category: "Event",
  // },
];

export const categories: string[] = ["All", "Event", "Workshop", "Competition"];
