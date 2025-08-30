import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function SuccessMessage({ onNewReport }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl w-full border-none shadow-2xl">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Report Submitted Successfully!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thank you for helping protect our mangrove ecosystems. Your report has been received and 
            will be reviewed by conservation authorities who can take appropriate action.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• Your report will be reviewed by local environmental authorities</li>
              <li>• Priority threats may receive immediate investigation</li>
              <li>• You may be contacted for additional details if you provided contact information</li>
              <li>• Updates on actions taken will be reflected in our public dashboard</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onNewReport}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Submit Another Report
            </Button>
            <Link to={createPageUrl("Dashboard")}>
              <Button variant="outline" className="px-8 py-3">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
