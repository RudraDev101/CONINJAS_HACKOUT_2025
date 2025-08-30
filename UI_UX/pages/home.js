import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BarChart3, TreePine, AlertTriangle, Camera, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-600 to-emerald-600 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <TreePine className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Community-Powered Conservation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Protecting Mangroves Through
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Community Action
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Join thousands of citizens, researchers, and conservationists working together to monitor 
            and protect critical mangrove ecosystems worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Report")}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg">
                <Shield className="w-5 h-5 mr-2" />
                Report a Threat
              </Button>
            </Link>
            <Link to={createPageUrl("Dashboard")}>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg rounded-xl">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Challenge We Face
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mangrove forests are disappearing 3-5 times faster than other forests, yet they're crucial for 
              coastal protection, biodiversity, and carbon sequestration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Rapid Deforestation</h3>
                  <p className="text-gray-600">Coastal development and aquaculture are destroying mangrove habitats faster than they can recover.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Limited Monitoring</h3>
                  <p className="text-gray-600">Traditional monitoring methods can't keep pace with the scale and speed of environmental threats.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Community Solution</h3>
                  <p className="text-gray-600">Local communities are the first to notice changes and can provide real-time monitoring data.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mangrove forest aerial view"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Community Monitoring Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple three-step process that empowers anyone to contribute to mangrove conservation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Spot & Capture</h3>
                <p className="text-gray-600">
                  Notice something concerning in your local mangrove area? Take a photo and document what you see.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Report & Locate</h3>
                <p className="text-gray-600">
                  Use our simple form to describe the threat and automatically capture the location data.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Take Action</h3>
                <p className="text-gray-600">
                  Authorities and conservation groups receive alerts and can respond quickly to protect the area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing community of environmental guardians and help protect mangrove ecosystems for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Report")}>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                <Camera className="w-5 h-5 mr-2" />
                Submit Your First Report
              </Button>
            </Link>
            <Link to={createPageUrl("About")}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-xl">
                Learn More About Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
