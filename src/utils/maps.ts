interface Coordinates {
  lat: number;
  lng: number;
}

export function createMapsUrl(location: string, coordinates?: Coordinates): string {
  // Use coordinates if available, otherwise use address
  const query = coordinates 
    ? `${coordinates.lat},${coordinates.lng}`
    : encodeURIComponent(location);

  // Universal deep link that works on both iOS and Android
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}