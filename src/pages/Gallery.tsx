import Navbar from "@/components/Navbar";
import { Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import galleryBg from "@/assets/events.webp"; // Reusing the events background
import { useState } from "react";
import { allImages, categories } from "@/data/gallery";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Gallery | NSS Club</title>
        <meta
          name="description"
          content="A glimpse into the vibrant life and events at NSS Club. Explore our gallery of moments captured during our various activities."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative pt-24 pb-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryBg})` }}
        >
          <div className="absolute inset-0 bg-primary opacity-80" />
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                Our Gallery
              </Badge>
              <h1 className="text-5xl font-bold text-white mb-6">
                Moments Captured
              </h1>
              <p className="text-xl text-white/80">
                A glimpse into the vibrant life and events at NSS Clubs.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Photo Gallery
            </h2>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-lg">
                        {image.title}
                      </h3>
                      <Badge className="mt-1 bg-accent text-accent-foreground">
                        <Tag className="w-3 h-3 mr-1" />
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Want to be a part of it?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Create your own memories. Join our clubs and participate in amazing events.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Join NSS Clubs
            </Button>
          </div>
        </section> */}
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
