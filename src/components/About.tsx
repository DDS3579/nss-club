import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { value: "4+", label: "Years Active" },
    { value: "100+", label: "All Time Members" },
    { value: "100+", label: "Awards Given" },
  ];

  const values = [
    {
      icon: Users,
      title: "Community",
      description: "Build lasting friendships and collaborate with diverse minds",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Strive for the highest standards in everything we do",
    },
    {
      icon: TrendingUp,
      title: "Leadership",
      description: "Develop skills that will guide you throughout your life",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Think creatively and bring new ideas to life",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <Badge variant="secondary" className="mb-6 text-primary bg-primary/10 px-4 py-2 text-sm font-medium">
              About NSS Clubs
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Empowering Students Beyond the{" "}
              <span className="text-primary">Classroom</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                NSS Clubs is the heart of student life at the National School of Sciences. 
                We believe that education extends far beyond textbooks and lectures. Through our 
                six diverse clubs, students discover their passions, develop new skills, and create 
                memories that last a lifetime.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're interested in arts, science, sports, literature, entertainment, or 
                social service, there's a place for you here. Join us in creating a vibrant, inclusive 
                community where every student can thrive and lead.
              </p>
            </div>

            <div className="flex gap-16">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Values Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
