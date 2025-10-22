import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft, User, Users } from "lucide-react";
import Footer from "@/components/Footer";

const ClubDetail = () => {
  const { clubName } = useParams();

  const clubsData: Record<string, any> = {
    "arts-crafts": {
      name: "Arts & Crafts",
      description: "Express creativity through visual arts, design, and handmade crafts",
      fullDescription: "Our Arts & Crafts club is dedicated to nurturing creativity and artistic expression. Members explore various mediums including painting, sculpture, digital art, and traditional crafts. We host regular workshops, exhibitions, and collaborative projects that showcase student talent.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
      tags: ["Painting", "Sculpture", "Digital Art", "Exhibitions"],
      heads: [
        { name: "Alex Martinez", role: "Club President", contact: "alex.martinez@nsscampus.edu" },
        { name: "Sophia Lee", role: "Vice President", contact: "sophia.lee@nsscampus.edu" },
      ],
    },
    "science-technology": {
      name: "Science & Technology",
      description: "Explore innovation through experiments, coding, and scientific research",
      fullDescription: "The Science & Technology club brings together curious minds passionate about discovery and innovation. From robotics competitions to coding workshops, we provide hands-on experience with cutting-edge technology and scientific research methodologies.",
      image: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Robotics", "Coding", "Science Fair", "Research"],
      heads: [
        { name: "David Kumar", role: "Club President", contact: "david.kumar@nsscampus.edu" },
        { name: "Emma Wilson", role: "Vice President", contact: "emma.wilson@nsscampus.edu" },
      ],
    },
    "entertainment": {
      name: "Entertainment",
      description: "Showcase talent in music, dance, drama, and performing arts",
      fullDescription: "Our Entertainment club is the heartbeat of campus cultural life. Whether you're into music, dance, drama, or any performing art, this is your stage. We organize talent shows, concerts, theatrical performances, and collaborate on major campus events.",
      image: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Music", "Dance", "Drama", "Talent Shows"],
      heads: [
        { name: "Maya Patel", role: "Club President", contact: "maya.patel@nsscampus.edu" },
        { name: "Ryan Garcia", role: "Vice President", contact: "ryan.garcia@nsscampus.edu" },
      ],
    },
    "social": {
      name: "Social",
      description: "Make a difference through community service and social initiatives",
      fullDescription: "The Social club is committed to creating positive change in our community. Through charity drives, volunteering programs, and awareness campaigns, we empower students to make a meaningful impact on society while developing leadership and organizational skills.",
      image: "https://images.unsplash.com/photo-1759675934052-1d82517c76c8?auto=format&fit=crop&w=1200&q=80",
      tags: ["Charity Drives", "Volunteering", "Awareness", "Campaigns"],
      heads: [
        { name: "Olivia Brown", role: "Club President", contact: "olivia.brown@nsscampus.edu" },
        { name: "Ethan Davis", role: "Vice President", contact: "ethan.davis@nsscampus.edu" },
      ],
    },
    "sports": {
      name: "Sports",
      description: "Build teamwork and fitness through athletics and competitions",
      fullDescription: "The Sports club promotes physical fitness, teamwork, and competitive spirit. From organizing inter-college tournaments to training sessions, we support athletes of all skill levels and encourage participation in various sports including football, basketball, and athletics.",
      image: "https://images.unsplash.com/photo-1676444920926-c8a084ec4003?auto=format&fit=crop&w=1200&q=80",
      tags: ["Football", "Basketball", "Athletics", "Tournaments"],
      heads: [
        { name: "Marcus Johnson", role: "Club President", contact: "marcus.johnson@nsscampus.edu" },
        { name: "Ava Smith", role: "Vice President", contact: "ava.smith@nsscampus.edu" },
      ],
    },
    "literature": {
      name: "Literature",
      description: "Cultivate imagination through writing, poetry, and storytelling",
      fullDescription: "The Literature club is a haven for word lovers and storytellers. We explore the world of creative writing, poetry, book discussions, and literary publications. Members participate in writing workshops, poetry slams, and contribute to our campus literary magazine.",
      image: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Creative Writing", "Poetry", "Book Club", "Publications"],
      heads: [
        { name: "Isabella Chen", role: "Club President", contact: "isabella.chen@nsscampus.edu" },
        { name: "Noah Anderson", role: "Vice President", contact: "noah.anderson@nsscampus.edu" },
      ],
    },
  };

  const club = clubsData[clubName || ""];

  if (!club) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Club Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
              <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {club.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {club.description}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">About This Club</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {club.fullDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              {club.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Club Heads Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Club Heads</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the student leaders driving this club forward
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {club.heads.map((head: any, index: number) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {head.role}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    {head.name}
                  </p>
                  <a 
                    href={`mailto:${head.contact}`}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {head.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-lg mb-8 opacity-90">
            Become part of our growing community and explore your passions
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Join This Club
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
            <Footer />
    </div>
  );
};

export default ClubDetail;
