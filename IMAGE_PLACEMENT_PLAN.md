"""
Strategic image placement plan for CityView Guest House

Based on unikVilla.co.zw reference, here are the 40 images strategically placed:

## Hero Carousel (4 images)
- Exterior facade (main entrance)
- Garden/patio area
- Room interior (master suite)
- Night scene/ambiance

## Gallery Section (20 images)
### Indoor Gallery (10 images)
- Room interiors (deluxe suite, master, cozy)
- Amenities (WiFi, breakfast, parking, security)
- Bathroom/showers
- Workspace areas
- Lighting/details

### Outdoor Gallery (10 images)
- Garden/landscape
- Exterior architecture
- Parking/security areas
- Neighborhood views
- Solar/borehole infrastructure

## Property Cards (3 images)
- Deluxe Garden Suite
- Master Executive Room
- Cozy Double / Twin Room

## Additional Uses (3 images)
- Lifestyle features (security, solar, quiet)
- Amenity highlights
- Location/area shots

## Implementation Plan

### 1. Create Hero Component
```tsx
// src/components/Hero.tsx
const heroImages = [
  "/src/assets/images/property/480110531_...", // Exterior facade
  "/src/assets/images/property/494700947_...", // Garden/patio
  "/src/assets/images/property/494724128_...", // Room interior
  "/src/assets/images/property/480430306_...", // Night scene
];
```

### 2. Create Gallery Section
```tsx
// src/components/GallerySection.tsx
const indoorImages = [
  // Room interiors, amenities, details (10 images)
];

const outdoorImages = [
  // Garden, exterior, infrastructure (10 images)
];
```

### 3. Update Property Cards
```tsx
// src/components/PropertyCard.tsx
// Use room-specific images from IMAGES object
```

### 4. Add Additional Sections
- Lifestyle Features Section (using remaining 3 images)
- Location/Map Section (using landscape images)
- Amenity Highlights (using amenity-focused images)

## Image Categories

### Exterior/Facade (4 images)
- Main entrance
- Garden/patio
- Architecture details
- Night lighting

### Room Interiors (12 images)
- Deluxe Garden Suite (4 angles/details)
- Master Executive Room (4 angles/details)
- Cozy Double / Twin Room (4 angles/details)

### Outdoor/Landscape (10 images)
- Garden views
- Parking/security
- Neighborhood
- Solar/borehole infrastructure

### Lifestyle/Amenities (8 images)
- Security features
- Solar power
- Borehole water
- WiFi connectivity
- Breakfast service
- Parking facilities
- Workspace amenities
- Other lifestyle features

## Strategic Placement Benefits

1. **Hero Carousel**: Creates immersive first impression
2. **Gallery Section**: Provides comprehensive visual tour
3. **Property Cards**: Quick room previews with strategic images
4. **Lifestyle Features**: Highlights unique selling points
5. **Location Section**: Shows neighborhood and accessibility

## Next Steps

1. Create Hero component with carousel
2. Create Gallery component with indoor/outdoor sections
3. Update PropertyCard to use room-specific images
4. Add Lifestyle Features section
5. Add Location/Map section
6. Implement remaining sections
7. Build and verify
