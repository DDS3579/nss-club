import { Card, CardContent } from "@/components/ui/card";
import { Mail, User, Shield, FileText, Wallet, Instagram } from "lucide-react";

const ExecutiveHeads = () => {
  const executives = [
    {
      position: "President",
      name: "Mr. Prince Lama",
      contact: "@prince",
      icon: User,
    },
    {
      position: "Club Advisor",
      name: "Ms. Kriti Thapa",
      contact: "advisor@nsscampus.edu",
      icon: Shield,
    },
    {
      position: "Secretary",
      name: "Ms. Ankika Shrestha",
      contact: "secretary@nsscampus.edu",
      icon: FileText,
    },
    {
      position: "Treasurer",
      name: "Ms. Aishwarya Dahal",
      contact: "treasurer@nsscampus.edu",
      icon: Wallet,
    },
  ];

  return (
    <section id="executive-heads" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Executive Heads
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated leaders who guide and support our campus club community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((exec, index) => {
            const IconComponent = exec.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exec.position}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    {exec.name}
                  </p>
                  <a 
                    href={`https://instagram.com/${exec.contact}`}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    {exec.contact}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveHeads;
