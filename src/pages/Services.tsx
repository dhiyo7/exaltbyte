import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Share2, Users, Zap, Shield, Cloud, Code, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Database Management",
    description: "Professional MySQL, PostgreSQL, and MongoDB setup, optimization, and maintenance services.",
    icon: Database,
    features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Migration Services"],
    price: "Starting from $299",
    badge: "Popular"
  },
  {
    title: "Workflow Automation",
    description: "n8n workflow automation to streamline your business processes and increase efficiency.",
    icon: Zap,
    features: ["Custom Workflows", "API Integration", "Scheduled Tasks", "Error Handling"],
    price: "Starting from $199",
    badge: "New"
  },
  {
    title: "Team Collaboration",
    description: "Complete collaboration setup with tools like Slack, Notion, and custom dashboards.",
    icon: Users,
    features: ["Tool Integration", "Custom Dashboards", "Team Training", "Support Setup"],
    price: "Starting from $149"
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS, Google Cloud, and Azure deployment with monitoring and scaling solutions.",
    icon: Cloud,
    features: ["Cloud Migration", "Auto-scaling", "Cost Optimization", "24/7 Monitoring"],
    price: "Starting from $399"
  },
  {
    title: "Custom Development",
    description: "Full-stack development services using modern technologies and best practices.",
    icon: Code,
    features: ["Frontend Development", "Backend APIs", "Database Design", "Testing & QA"],
    price: "Contact for Quote"
  },
  {
    title: "Communication Systems",
    description: "Real-time chat, video conferencing, and notification systems for your team.",
    icon: MessageSquare,
    features: ["Real-time Chat", "Video Integration", "Push Notifications", "Mobile Apps"],
    price: "Starting from $249"
  }
];

const additionalServices = [
  {
    title: "Security Audit",
    description: "Comprehensive security assessment and recommendations",
    icon: Shield,
    price: "$99"
  },
  {
    title: "Performance Review",
    description: "Detailed analysis and optimization recommendations",
    icon: Share2,
    price: "$79"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-20 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-green-400">Services</span> We Offer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to power your business with cutting-edge technology
          </p>
        </div>
      </header>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-green-400/20 hover:border-green-400/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-green-400" />
                    </div>
                    {service.badge && (
                      <Badge className="bg-green-400/20 text-green-400 border-green-400/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-green-400">{service.price}</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-green-400 hover:bg-green-500 text-black"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-t from-gray-900/30 to-transparent">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">Additional</span> Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-green-400/20 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <p className="text-green-400 font-bold">{service.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-green-400/10 to-transparent rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-6 text-lg"
              >
                Schedule Consultation
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-400/50 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-green-400/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/logosvg.svg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xl font-bold text-green-400">Exaltbyte</span>
            </div>

            <div className="text-gray-400 text-center md:text-right">
              <p className="mb-1">Professional services for modern businesses</p>
              <p>&copy; 2025 Exaltbyte. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
