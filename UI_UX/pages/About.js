import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Target, Users, Code, Shield, BarChart3 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <TreePine className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Community Mangrove Watch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A citizen-powered platform dedicated to protecting mangrove forests through 
            community surveillance, real-time reporting, and coordinated conservation action.
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-red-600" />
                The Crisis We Face
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mangrove forests are among the world's most threatened ecosystems, disappearing 
                    3-5 times faster than tropical rainforests. These vital coastal guardians protect 
                    communities from storms, support marine biodiversity, and store massive amounts of carbon.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Traditional monitoring methods are too slow and expensive to keep pace with rapid 
                    environmental changes and illegal activities that threaten these critical habitats.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Key Threats</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Coastal development and land conversion</li>
                    <li>• Illegal logging and deforestation</li>
                    <li>• Pollution and chemical contamination</li>
                    <li>• Unsustainable aquaculture practices</li>
                    <li>• Climate change and sea level rise</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Solution */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-xl text-gray-600">
              Empowering communities with technology to become environmental guardians
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Network</h3>
                <p className="text-gray-600">
                  Local communities, tourists, and conservationists become our eyes and ears, 
                  reporting threats as they happen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Instant alerts and centralized dashboard enable rapid response from 
                  authorities and conservation organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Coordinated Action</h3>
                <p className="text-gray-600">
                  Verified reports trigger coordinated responses from environmental agencies, 
                  NGOs, and local authorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Project Goals */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Goals</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Short-term Objectives</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Deploy community reporting system</li>
                    <li>• Build network of local guardians</li>
                    <li>• Establish partnerships with conservation groups</li>
                    <li>• Create rapid response protocols</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Future Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Interactive map visualization</li>
                    <li>• AI-powered threat assessment</li>
                    <li>• Mobile app with offline capability</li>
                    <li>• Integration with satellite monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built by CONINJAS</h2>
            <p className="text-xl text-gray-600">
              A team passionate about using technology for environmental conservation
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed mb-6">
                  CONINJAS is a collaborative team of developers, environmental scientists, and 
                  conservation advocates united by the mission to protect our planet's most vulnerable ecosystems.
                </p>
                <p className="text-gray-600">
                  We believe that by combining community action with modern technology, 
                  we can create powerful tools for environmental protection and sustainable development.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>React & JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Backend & Storage</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>Firebase Firestore</li>
                    <li>Firebase Storage</li>
                    <li>Real-time Database</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>Geolocation API</li>
                    <li>Photo Upload</li>
                    <li>Progressive Web App</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
