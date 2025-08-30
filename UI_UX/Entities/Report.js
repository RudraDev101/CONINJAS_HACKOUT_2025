{
  "name": "Report",
  "type": "object",
  "properties": {
    "description": {
      "type": "string",
      "description": "Description of the environmental threat"
    },
    "photo_url": {
      "type": "string",
      "description": "URL of the uploaded photo"
    },
    "location_text": {
      "type": "string",
      "description": "Location description or address"
    },
    "latitude": {
      "type": "number",
      "description": "GPS latitude coordinate"
    },
    "longitude": {
      "type": "number",
      "description": "GPS longitude coordinate"
    },
    "reporter_name": {
      "type": "string",
      "description": "Name of person reporting the threat"
    },
    "reporter_email": {
      "type": "string",
      "description": "Email of person reporting"
    },
    "status": {
      "type": "string",
      "enum": [
        "new",
        "investigating",
        "resolved"
      ],
      "default": "new",
      "description": "Status of the report"
    },
    "priority": {
      "type": "string",
      "enum": [
        "low",
        "medium",
        "high",
        "critical"
      ],
      "default": "medium",
      "description": "Priority level of the threat"
    }
  },
  "required": [
    "description",
    "location_text"
  ]
}
