import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Clubs = () => {
  const clubs = [
    {
      name: "Arts & Crafts",
      slug: "arts-crafts",
      description: "Express creativity through visual arts, design, and handmade crafts",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      tags: ["Painting", "Sculpture", "Digital Art", "Exhibitions"],
    },
    {
      name: "Science & Technology",
      slug: "science-technology",
      description: "Explore innovation through experiments, coding, and scientific research",
      image: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4?auto=format&fit=crop&w=800&q=80",
      tags: ["Robotics", "Coding", "Science Fair", "Research"],
    },
    {
      name: "Entertainment",
      slug: "entertainment",
      description: "Showcase talent in music, dance, drama, and performing arts",
      image: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Music", "Dance", "Drama", "Talent Shows"],
    },
    {
      name: "Social",
      slug: "social",
      description: "Make a difference through community service and social initiatives",
      image: "https://images.unsplash.com/photo-1759675934052-1d82517c76c8?auto=format&fit=crop&w=800&q=80",
      tags: ["Charity Drives", "Volunteering", "Awareness", "Campaigns"],
    },
    {
      name: "Sports",
      slug: "sports",
      description: "Build teamwork and fitness through athletics and competitions",
      image: "https://images.unsplash.com/photo-1676444920926-c8a084ec4003?auto=format&fit=crop&w=800&q=80",
      tags: ["Football", "Basketball", "Athletics", "Tournaments"],
    },
    {
      name: "Literature",
      slug: "literature",
      description: "Cultivate imagination through writing, poetry, and storytelling",
      image: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4?auto=format&fit=crop&w=800&q=80",
      tags: ["Creative Writing", "Poetry", "Book Club", "Publications"],
    },
  ];

  return (
    <section id="clubs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Six Clubs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover your passion and join a community of like-minded students. 
            Each club offers unique opportunities for growth, creativity, and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{club.name}</h3>
                <p className="text-muted-foreground mb-4">{club.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {club.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/club/${club.slug}`}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;
