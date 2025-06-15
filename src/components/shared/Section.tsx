import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <h2 className="text-3xl font-serif text-[#4A5D4B] text-center mb-8">{title}</h2>
      {children}
    </section>
  );
}