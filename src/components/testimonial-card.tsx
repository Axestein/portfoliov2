"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
}

// Original TestimonialCard component
export function TestimonialCard({
  name,
  role,
  company,
  text,
  avatar,
}: Testimonial) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <CardContent className="p-6 flex-1">
        <div className="space-y-4">
          <svg
            viewBox="0 0 24 24"
            className="h-12 w-12 text-muted-foreground/20"
            fill="currentColor"
          >
            <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
          </svg>
          <p className="text-muted-foreground">{text}</p>
        </div>
      </CardContent>
      <CardFooter className="border-t p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            {avatar && <AvatarImage src={avatar} />}
            <AvatarFallback className="bg-foreground text-background">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold">{name}</h3>
            <div className="flex items-center gap-2">
              <p className="ml-3 text-sm text-muted-foreground">{role}</p>
              <Badge variant="outline" className="text-xs">
                {company}
              </Badge>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// Testimonial Carousel Component
export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full group">
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 p-2 rounded-full bg-background shadow-md hover:bg-accent transition-colors"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="px-2 sm:px-4">
        <TestimonialCard {...testimonials[currentIndex]} />
      </div>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 p-2 rounded-full bg-background shadow-md hover:bg-accent transition-colors"
        aria-label="Next testimonials"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

// Alternative version showing multiple testimonials at once
export function MultiTestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 2; // Change this to show more testimonials at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= testimonials.length ? 0 : prevIndex + itemsToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsToShow < 0 ? testimonials.length - (testimonials.length % itemsToShow || itemsToShow) : prevIndex - itemsToShow
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="relative w-full group">
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 p-2 rounded-full bg-background shadow-md hover:bg-accent transition-colors"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 sm:px-4">
        {currentTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
        ))}
      </div>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 p-2 rounded-full bg-background shadow-md hover:bg-accent transition-colors"
        aria-label="Next testimonials"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}