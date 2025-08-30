import React, { useState } from "react";
import { Report } from "@/entities/Report";
import { UploadFile } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera, MapPin, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import LocationCapture from "../components/report/LocationCapture";
import PhotoUpload from "../components/report/PhotoUpload";
import SuccessMessage from "../components/report/SuccessMessage";

export default function ReportPage() {
  const [formData, setFormData] = useState({
    description: "",
    location_text: "",
    reporter_name: "",
    reporter_email: "",
    photo_url: "",
    latitude: null,
    longitude: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleLocationCapture = (location) => {
    setFormData(prev => ({
      ...prev,
      latitude: location.latitude,
      longitude: location.longitude,
      location_text: location.address || `${location.latitude}, ${location.longitude}`
    }));
  };

  const handlePhotoUpload = (photoUrl) => {
    setFormData(prev => ({ ...prev, photo_url: photoUrl }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!formData.description.trim() || !formData.location_text.trim()) {
      setError("Please provide a description and location for your report.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await Report.create(formData);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        description: "",
        location_text: "",
        reporter_name: "",
        reporter_email: "",
        photo_url: "",
        latitude: null,
        longitude: null
      });
    } catch (err) {
      setError("Failed to submit your report. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  if (showSuccess) {
    return <SuccessMessage onNewReport={() => setShowSuccess(false)} />;
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Environmental Threat Report</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Report a Mangrove Threat
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us protect mangrove ecosystems by reporting environmental threats, illegal activities, or concerning changes you've observed.
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Main Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                    Threat Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="description">What did you observe? *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe the environmental threat or concerning activity you witnessed. Include details about what you saw, when it occurred, and any potential impacts..."
                      className="mt-2 min-h-32"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Location Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LocationCapture 
                    onLocationCapture={handleLocationCapture}
                    currentLocation={formData.location_text}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Photo & Contact */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Camera className="w-5 h-5 mr-2 text-green-600" />
                    Photo Evidence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PhotoUpload 
                    onPhotoUpload={handlePhotoUpload}
                    currentPhoto={formData.photo_url}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information (Optional)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="reporter_name">Your Name</Label>
                    <Input
                      id="reporter_name"
                      value={formData.reporter_name}
                      onChange={(e) => handleInputChange("reporter_name", e.target.value)}
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="reporter_email">Your Email</Label>
                    <Input
                      id="reporter_email"
                      type="email"
                      value={formData.reporter_email}
                      onChange={(e) => handleInputChange("reporter_email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      We may contact you for follow-up questions about your report.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-3 text-lg font-semibold rounded-xl shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Submitting Report...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2" />
                  Submit Threat Report
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
