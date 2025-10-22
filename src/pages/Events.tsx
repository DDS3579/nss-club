import Navbar from "@/components/Navbar";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { upcomingEvents, pastEvents } from "@/data/events";
import eventsBg from "@/assets/events.webp";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative pt-24 pb-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventsBg})` }}
        >
          <div className="absolute inset-0 bg-primary opacity-80" />
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                Events & Activities
              </Badge>
              <h1 className="text-5xl font-bold text-white mb-6">
                Upcoming Events
              </h1>
              <p className="text-xl text-white/80">
                Join us for exciting events, workshops, and competitions
                throughout the year
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {event.tag}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {event.club}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{event.attendees}+ Expected Attendees</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Past Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      {event.tag}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="text-xs">
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't Miss Out!
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest events and activities. Follow NSS
              Clubs Instagram Page for More!
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <Link to={"/"}>Learn More</Link>
            </Button>
          </div>
        </section>
              <Footer />
      </div>
    </>
  );
};

export default Events;
