import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Proyek A",
    description: "Aplikasi web responsif untuk manajemen tugas",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Proyek B",
    description: "Sistem manajemen konten untuk blog perusahaan",
    technologies: ["Next.js", "GraphQL", "MongoDB"],
    link: "#"
  },
  {
    title: "Proyek C",
    description: "Aplikasi mobile untuk pelacakan kebugaran",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Kami</h1>
        <p className="text-xl text-gray-300">Beberapa proyek terbaik yang telah kami kerjakan</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="bg-gray-900 border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-400">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
