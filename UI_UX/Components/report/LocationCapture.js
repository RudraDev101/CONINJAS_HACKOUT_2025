import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LocationCapture({ onLocationCapture, currentLocation }) {
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [manualLocation, setManualLocation] = useState(currentLocation || "");

  const getCurrentLocation = async () => {
    setIsGettingLocation(true);
    setLocationError(null);

    try {
      const position = await new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocation is not supported by your browser"));
          return;
        }

        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
        );
      });

      const { latitude, longitude } = position.coords;
      
      // Try to get human-readable address
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const data = await response.json();
        const address = data.display_name || `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
        
        setManualLocation(address);
        onLocationCapture({ latitude, longitude, address });
      } catch (geocodeError) {
        // If geocoding fails, use coordinates
        const coordsText = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
        setManualLocation(coordsText);
        onLocationCapture({ latitude, longitude, address: coordsText });
      }
    } catch (error) {
      console.error("Geolocation error:", error);
      setLocationError(
        error.code === 1 
          ? "Location access denied. Please enter location manually."
          : "Unable to get your location. Please enter it manually."
      );
    }

    setIsGettingLocation(false);
  };

  const handleManualLocationChange = (value) => {
    setManualLocation(value);
    onLocationCapture({ latitude: null, longitude: null, address: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          type="button"
          onClick={getCurrentLocation}
          disabled={isGettingLocation}
          variant="outline"
          className="flex items-center"
        >
          {isGettingLocation ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Navigation className="w-4 h-4 mr-2" />
          )}
          {isGettingLocation ? "Getting Location..." : "Use My Current Location"}
        </Button>
      </div>

      {locationError && (
        <Alert variant="destructive">
          <MapPin className="h-4 w-4" />
          <AlertDescription>{locationError}</AlertDescription>
        </Alert>
      )}

      <div>
        <Label htmlFor="location">Location Description *</Label>
        <Input
          id="location"
          value={manualLocation}
          onChange={(e) => handleManualLocationChange(e.target.value)}
          placeholder="Enter the location where you observed the threat (e.g., 'Near Sunset Beach Marina' or coordinates)"
          className="mt-2"
          required
        />
        <p className="text-sm text-gray-500 mt-1">
          Be as specific as possible to help responders locate the area quickly.
        </p>
      </div>
    </div>
  );
}
