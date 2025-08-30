import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, User, Camera, ExternalLink } from "lucide-react";
import { format } from "date-fns";

export default function ReportDetails({ report, onUpdateReport }) {
  if (!report) {
    return (
      <Card className="shadow-lg border-none">
        <CardContent className="p-12 text-center text-gray-500">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-lg font-medium mb-2">Select a Report</p>
          <p className="text-sm">Click on any report from the list to view detailed information and take action.</p>
        </CardContent>
      </Card>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "new": return "bg-orange-100 text-orange-800 border-orange-200";
      case "investigating": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "resolved": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="shadow-lg border-none">
      <CardHeader className="border-b">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">Report Details</CardTitle>
          <Badge className={`${getStatusColor(report.status)} border`}>
            {report.status.replace("_", " ")}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Photo */}
        {report.photo_url && (
          <div>
            <img
              src={report.photo_url}
              alt="Threat evidence"
              className="w-full h-48 object-cover rounded-lg shadow-sm"
            />
          </div>
        )}

        {/* Description */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">{report.description}</p>
        </div>

        {/* Meta Information */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">Location</p>
              <p className="text-sm text-gray-600">{report.location_text}</p>
              {report.latitude && report.longitude && (
                <p className="text-xs text-gray-500 mt-1">
                  GPS: {report.latitude.toFixed(6)}, {report.longitude.toFixed(6)}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Reported</p>
              <p className="text-sm text-gray-600">
                {format(new Date(report.created_date), "MMMM d, yyyy 'at' h:mm a")}
              </p>
            </div>
          </div>

          {report.reporter_name && (
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Reporter</p>
                <p className="text-sm text-gray-600">{report.reporter_name}</p>
                {report.reporter_email && (
                  <p className="text-xs text-gray-500">{report.reporter_email}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 border-t space-y-3">
          <p className="text-sm font-medium text-gray-900 mb-3">Quick Actions</p>
          
          {report.latitude && report.longitude && (
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open(
                `https://maps.google.com?q=${report.latitude},${report.longitude}`,
                '_blank'
              )}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Google Maps
            </Button>
          )}

          {report.photo_url && (
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open(report.photo_url, '_blank')}
            >
              <Camera className="w-4 h-4 mr-2" />
              View Full Size Photo
            </Button>
          )}
        </div>

        {/* Status Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> Report status management will be available in future updates. 
            For now, use the dashboard to track and coordinate response efforts.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
