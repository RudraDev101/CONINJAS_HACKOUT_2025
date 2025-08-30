import React, { useState } from "react";
import { UploadFile } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Camera, Upload, X, Loader2 } from "lucide-react";

export default function PhotoUpload({ onPhotoUpload, currentPhoto }) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileUpload = async (file) => {
    setIsUploading(true);
    setUploadError(null);

    try {
      const { file_url } = await UploadFile({ file });
      onPhotoUpload(file_url);
    } catch (error) {
      setUploadError("Failed to upload photo. Please try again.");
    }

    setIsUploading(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const clearPhoto = () => {
    onPhotoUpload("");
  };

  return (
    <div className="space-y-4">
      {!currentPhoto && (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <div className="space-y-3">
            <p className="text-lg font-medium text-gray-700">Add Photo Evidence</p>
            <p className="text-sm text-gray-500">
              Photos help authorities understand the severity and nature of the threat
            </p>
            
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="photo-upload"
              disabled={isUploading}
            />
            
            <Button
              type="button"
              onClick={() => document.getElementById("photo-upload").click()}
              disabled={isUploading}
              variant="outline"
              className="mx-auto"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Photo
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {currentPhoto && (
        <div className="relative">
          <img
            src={currentPhoto}
            alt="Threat evidence"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <Button
            type="button"
            onClick={clearPhoto}
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {uploadError && (
        <p className="text-sm text-red-600">{uploadError}</p>
      )}
    </div>
  );
}
