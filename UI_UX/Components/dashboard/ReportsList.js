import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, User, Camera, AlertTriangle } from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

export default function ReportsList({ reports, isLoading, onSelectReport, selectedReport }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "new": return "bg-orange-100 text-orange-800 border-orange-200";
      case "investigating": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "resolved": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (isLoading) {
    return (
      <div className="divide-y">
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="p-6 space-y-3">
            <div className="flex items-start justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="p-12 text-center text-gray-500">
        <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <p className="text-lg font-medium">No reports found</p>
        <p className="text-sm">Reports will appear here as they are submitted by the community.</p>
      </div>
    );
  }

  return (
    <div className="divide-y">
      {reports.map((report) => (
        <div
          key={report.id}
          className={`p-6 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
            selectedReport?.id === report.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
          }`}
          onClick={() => onSelectReport(report)}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              {report.photo_url && (
                <Camera className="w-4 h-4 text-gray-400" />
              )}
              <span className="text-sm text-gray-500">
                Report #{report.id.slice(-8)}
              </span>
            </div>
            <Badge className={`${getStatusColor(report.status)} border text-xs`}>
              {report.status.replace("_", " ")}
            </Badge>
          </div>

          <p className="text-gray-900 font-medium mb-3 line-clamp-2">
            {report.description}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="truncate">{report.location_text}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{format(new Date(report.created_date), "MMM d, yyyy")}</span>
            </div>

            {report.reporter_name && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{report.reporter_name}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
