import React, { useState, useEffect } from "react";
import { Report } from "@/entities/Report";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, AlertTriangle, Eye, MapPin, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import StatsOverview from "../components/dashboard/StatsOverview";
import ReportsList from "../components/dashboard/ReportsList";
import ReportDetails from "../components/dashboard/ReportDetails";

export default function Dashboard() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    setIsLoading(true);
    try {
      const fetchedReports = await Report.list("-created_date");
      setReports(fetchedReports);
    } catch (error) {
      console.error("Error loading reports:", error);
    }
    setIsLoading(false);
  };

  const filteredReports = activeFilter === "all" 
    ? reports 
    : reports.filter(report => report.status === activeFilter);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Conservation Dashboard
              </h1>
              <p className="text-gray-600 text-lg">
                Monitor and manage community-reported mangrove threats
              </p>
            </div>
          </div>

          <StatsOverview reports={reports} isLoading={isLoading} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reports List */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-none">
              <CardHeader className="border-b">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="text-xl">Recent Reports</CardTitle>
                  <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-auto">
                    <TabsList className="grid grid-cols-4 w-full sm:w-auto">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="new">New</TabsTrigger>
                      <TabsTrigger value="investigating">Active</TabsTrigger>
                      <TabsTrigger value="resolved">Resolved</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ReportsList 
                  reports={filteredReports}
                  isLoading={isLoading}
                  onSelectReport={setSelectedReport}
                  selectedReport={selectedReport}
                />
              </CardContent>
            </Card>
          </div>

          {/* Report Details */}
          <div>
            <ReportDetails 
              report={selectedReport}
              onUpdateReport={loadReports}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
