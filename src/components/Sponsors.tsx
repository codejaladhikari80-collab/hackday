import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const Sponsors = () => {
  const rows = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10], [11, 12, 13]];
  const sizeClasses = ['w-64 h-64 md:w-80 md:h-80', 'w-48 h-48 md:w-56 md:h-56', 'w-40 h-40 md:w-44 md:h-44', 'w-32 h-32 md:w-36 md:h-36', 'w-24 h-24 md:w-28 md:h-28'];

  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <h2 className="text-4xl md:text-5xl font-black text-foreground transform -rotate-1">
              Our Sponsors & Partners
            </h2>
            <div className="absolute -bottom-3 left-0 w-full h-4 bg-primary/20 -rotate-1" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with Butwal Hack to support innovation and connect
            with Nepal's brightest student developers.
          </p>
        </div>


        <div className="max-w-5xl mx-auto">
          {/* Pyramid layout: rows of 1,2,3,4,3 items centered (placeholders only) */}
          {rows.map((row, rowIndex) => {
            const size = sizeClasses[rowIndex];
            return (
              <div key={rowIndex} className="flex justify-center gap-8 mb-8 flex-wrap">
                {row.map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className={`rounded-full flex items-center justify-center bg-muted/10 border border-muted-foreground/10 ${size} overflow-hidden`}
                      role="img"
                      aria-label={`Sponsor slot ${i}`}
                    >
                      {i === 1 ? (
                        <img src="/title-sponsor.jpeg" alt="Title Sponsor" className="w-full h-full object-contain rounded-full" />
                      ) : i === 2 ? (
                        <img src="/silver-sponsor.jpeg" alt="Silver Sponsor" className="w-full h-full object-contain rounded-full" />
                      ) : i === 3 ? (
                        <img src="/bronze-sponsor.jpg" alt="Bronze Sponsor" className="w-full h-full object-contain rounded-full" />
                      ) : i === 5 ? (
                        <img src="/eye-care.jpg" alt="Eye Care Partner" className="w-full h-full object-contain rounded-full" />
                      ) : i === 6 ? (
                        <img src="/theater-partner.png" alt="Theater Partner" className="w-full h-full object-contain rounded-full" />
                      ) : null}
                    </div>
                    {i === 1 && <span className="mt-2 text-lg md:text-xl font-semibold text-foreground">Title Sponsor</span>}
                    {i === 2 && <span className="mt-2 text-lg md:text-xl font-semibold text-foreground">Silver Sponsor</span>}
                    {i === 3 && <span className="mt-2 text-lg md:text-xl font-semibold text-foreground">Bronze Sponsor</span>}
                    {i === 5 && <span className="mt-2 text-lg md:text-xl font-semibold text-foreground">Eye Care Partner</span>}
                    {i === 6 && <span className="mt-2 text-lg md:text-xl font-semibold text-foreground">Theater Partner</span>}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="transform -rotate-1 hover:rotate-0"
              onClick={() => window.open('mailto:mail@butwalhacks.com')}
            >
              Become a Sponsor
            </Button>
            {/* Sponsorship deck download removed — contact via email */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
