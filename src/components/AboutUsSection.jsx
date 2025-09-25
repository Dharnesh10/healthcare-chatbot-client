import { HeartPulse, ShieldCheck, Users, Stethoscope, Globe2, Users2 } from "lucide-react";

export const AboutSection = () => {
  const points = [
    {
      title: "Our Mission",
      desc: "To empower citizens with instant access to trusted healthcare information, outbreak alerts, and vaccination scheduling.",
      icon: <HeartPulse className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Our Vision",
      desc: "To build a healthier nation by leveraging technology to provide timely, accessible, and reliable healthcare support.",
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Our Values",
      desc: "Transparency, trust, and accessibility are at the core of our healthcare solutions for every citizen.",
      icon: <Users className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Innovation",
      desc: "We continuously adopt the latest technologies to improve healthcare delivery and citizen engagement.",
      icon: <Stethoscope className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Global Outreach",
      desc: "Our vision extends beyond borders — aiming for global health equity through digital healthcare solutions.",
      icon: <Globe2 className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Community Engagement",
      desc: "We work closely with local communities to ensure healthcare services are accessible and inclusive for everyone.",
      icon: <Users2 className="h-8 w-8 text-pink-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          About <span className="text-blue-700">Us</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
          We are a government initiative dedicated to bringing healthcare
          closer to people through technology. Our chatbot platform integrates
          outbreak alerts, vaccination scheduling, and access to detailed
          reports — all in one reliable service.
        </p>

        {/* All Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-border 
                         bg-card/20 backdrop-blur-sm
                         hover:-translate-y-1 transition-all duration-500
                         hover:shadow-lg
                         relative group"
            >
              {/* Subtle glowing outline */}
              <div className="absolute inset-0 rounded-2xl border border-transparent 
                              group-hover:border-primary transition-colors duration-500 pointer-events-none" />

              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="p-4 rounded-full bg-card/30 backdrop-blur-sm">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutUsSection = AboutSection;
