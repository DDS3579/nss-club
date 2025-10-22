export interface Event {
  id: number;
  title: string;
  club: string;
  date: string;
  time?: string;
  location: string;
  description?: string;
  attendees?: number | string;
  image: string;
  tag: string;
}

export const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "NSS Tech Fest",
      club: "Science & Technology Club",
      date: "Coming Soon",
      time: "Coming Soon",
      location: "To be Declared",
      description: "Inter-School Event to be conducted with numerous competitions and a huge prize pool",
      attendees: "150+",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      tag: "Grand Event"
    },
    // {
    //   id: 2,
    //   title: "Science Fair 2025",
    //   club: "Science & Technology",
    //   date: "March 22, 2025",
    //   time: "9:00 AM - 5:00 PM",
    //   location: "Science Block",
    //   description: "Annual science fair featuring innovative projects and experiments",
    //   attendees: 200,
    //   image: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4",
    //   tag: "Science"
    // },
    // {
    //   id: 3,
    //   title: "Spring Music Festival",
    //   club: "Entertainment",
    //   date: "April 5, 2025",
    //   time: "5:00 PM - 9:00 PM",
    //   location: "School Auditorium",
    //   description: "Live performances by student bands and solo artists",
    //   attendees: 300,
    //   image: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
    //   tag: "Entertainment"
    // },
    // {
    //   id: 4,
    //   title: "Community Service Drive",
    //   club: "Social",
    //   date: "April 12, 2025",
    //   time: "8:00 AM - 2:00 PM",
    //   location: "Local Community Center",
    //   description: "Join us in making a difference through community service activities",
    //   attendees: 100,
    //   image: "https://images.unsplash.com/photo-1759675934052-1d82517c76c8",
    //   tag: "Social"
    // },
    // {
    //   id: 5,
    //   title: "Inter-School Sports Tournament",
    //   club: "Sports",
    //   date: "April 20, 2025",
    //   time: "7:00 AM - 6:00 PM",
    //   location: "NSS Sports Ground",
    //   description: "Annual sports competition featuring football, basketball, and athletics",
    //   attendees: 250,
    //   image: "https://images.unsplash.com/photo-1676444920926-c8a084ec4003",
    //   tag: "Sports"
    // },
    // {
    //   id: 6,
    //   title: "Poetry & Storytelling Night",
    //   club: "Literature",
    //   date: "April 28, 2025",
    //   time: "6:00 PM - 8:00 PM",
    //   location: "Library Hall",
    //   description: "An evening of poetry recitals and storytelling by talented students",
    //   attendees: 80,
    //   image: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4",
    //   tag: "Literature"
    // }
  ];

export const pastEvents: Event[] = [
    {
      id: 7,
      title: "Art Competition",
      club: "Art & Craft Club",
      date: "August 25, 2025",
      location: "Block-A Classroom",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      tag: "Arts"
    },
    // {
    //   id: 8,
    //   title: "Tech Workshop Series",
    //   club: "Science & Technology",
    //   date: "January 15, 2025",
    //   location: "Computer Lab",
    //   image: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4",
    //   tag: "Science"
    // }
  ];
