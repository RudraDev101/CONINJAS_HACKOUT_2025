import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TreePine, Shield, BarChart3, Users, Mail, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: TreePine },
  { title: "Report Threat", url: createPageUrl("Report"), icon: Shield },
  { title: "Dashboard", url: createPageUrl("Dashboard"), icon: BarChart3 },
  { title: "About", url: createPageUrl("About"), icon: Users },
  { title: "Contact", url: createPageUrl("Contact"), icon: Mail }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <style>
        {`
          :root {
            --primary-blue: #0369A1;
            --primary-teal: #047857; 
            --accent-sand: #A8A29E;
            --text-primary: #1E293B;
            --text-secondary: #64748B;
          }
        `}
      </style>
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent">
                  Community Mangrove Watch
                </h1>
                <p className="text-xs text-gray-500 font-medium">Protecting mangroves through community action</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          location.pathname === item.url
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Community Mangrove Watch</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering communities to protect and preserve mangrove ecosystems through collaborative monitoring and action.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to={createPageUrl("Report")} className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Report a Threat
                </Link>
                <Link to={createPageUrl("Dashboard")} className="block text-gray-300 hover:text-white text-sm transition-colors">
                  View Reports
                </Link>
                <Link to={createPageUrl("About")} className="block text-gray-300 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <Link to={createPageUrl("Contact")} className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Team
                </Link>
                <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  GitHub Project
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Community Mangrove Watch by CONINJAS. Built for environmental protection.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
