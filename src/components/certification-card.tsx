"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  image: string;
  credentialUrl?: string;
}

// Original CertificationCard component
export function CertificationCard({
  title,
  issuer,
  date,
  skills,
  image,
  credentialUrl,
}: Certification) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <CardHeader className="p-0">
        <div className="relative h-40 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-1">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Issued by:</span>
            <Badge variant="outline">{issuer}</Badge>
          </div>
          <time className="mt-2 flex flex-wrap gap-1">{date}</time>
          <div className="mt-2 flex flex-wrap gap-1">
            {skills.map((skill) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={skill}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-6">
        {credentialUrl && (
          <Link href={credentialUrl} target="_blank">
            <Badge className="flex gap-2 px-2 py-1 text-xs">
              View Credential
            </Badge>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

// New wrapper component for the carousel functionality
export function CertificationCardsCarousel({ certifications }: { certifications: Certification[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= certifications.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? certifications.length - (certifications.length % 2 || 2) : prevIndex - 2
    );
  };

  const currentCerts = certifications.slice(currentIndex, currentIndex + 2);

  return (
    <div className="relative w-full">
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-background shadow-md hover:bg-accent"
        aria-label="Previous certifications"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex gap-6">
        {currentCerts.map((cert) => (
          <div key={cert.title} className="flex-1 min-w-[calc(50%-12px)]">
            <CertificationCard {...cert} />
          </div>
        ))}
      </div>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-background shadow-md hover:bg-accent"
        aria-label="Next certifications"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}