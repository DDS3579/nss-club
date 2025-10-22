import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-primary opacity-80" />
      <div className="relative container mx-auto px-4 pt-14 pb-28">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white text-sm">Welcome to NSS Clubs</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-hero">
            Discover. Create.
            <br />
            <span className="text-accent">Lead.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join the vibrant community at National School of Sciences,
            Lainchaur. Explore six dynamic clubs where creativity meets
            leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button asChild className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-6 py-6 text-lg">
              <a href="#clubs">
                Explore Clubs
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 py-6 text-lg bg-transparent"
            >
              <a href="#contact">Learn More</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">6</div>
              <div className="text-white/80">Active Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">30+</div>
              <div className="text-white/80">Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-white/80">Events/Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-1.5"> */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-center pb-8">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
