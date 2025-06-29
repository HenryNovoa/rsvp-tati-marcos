import React from "react";
import { SectionIcon } from "./SectionIcon";

interface EventSectionProps {
  title: string;
  type: "ceremony" | "celebration";
  children: React.ReactNode;
}

export function EventSection({ title, type, children }: EventSectionProps) {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center">
            <SectionIcon type={type} />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 flex justify-center mb-8">
        <h2 className="inline-block bg-[#8FA98F] px-6 py-2 text-4xl font-playfair text-white relative font-self-deception-regular">
          {title}
          <div className="absolute -left-3 -right-3 h-full bg-[#8FA98F] -skew-x-12 -z-10 top-0" />
        </h2>
      </div>

      {/* Content */}
      <div className="font-belista italic relative z-10 max-w-md mx-auto">
        {children}
      </div>
    </section>
  );
}
