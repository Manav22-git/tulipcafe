export interface GalleryImage {
  id: string;
  title: string;
  category: "interior" | "food" | "exterior" | "ambience";
  src: string;
  caption: string;
  tall?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    title: "Baroque Main Hall",
    category: "interior",
    src: "/images/hero.png",
    caption: "Intricate black & white hand-painted baroque ceiling wall art & chandeliers",
    tall: true
  },
  {
    id: "g2",
    title: "Signature Pesto Pasta",
    category: "food",
    src: "/images/food/food3.png",
    caption: "Artisan green basil pesto pasta served with golden garlic crostini"
  },
  {
    id: "g3",
    title: "Luxury Collection Booth",
    category: "interior",
    src: "/images/interior2.png",
    caption: "Monochrome chevron tile flooring and custom ornate seating alcoves",
    tall: true
  },
  {
    id: "g4",
    title: "Pistachio Crepe Rolls",
    category: "food",
    src: "/images/food/food1.png",
    caption: "Handmade crepes drizzled with pistachio glaze & praline"
  },
  {
    id: "g5",
    title: "Café Exterior & Patio",
    category: "exterior",
    src: "/images/outdoor.png",
    caption: "Charming entrance opposite Galleria Mall, Akota, Vadodara",
    tall: true
  },
  {
    id: "g6",
    title: "Chef's Shakshuka",
    category: "food",
    src: "/images/food/food2.png",
    caption: "Spiced tomato & olive skillet paired with freshly sliced artisan baguette"
  },
  {
    id: "g7",
    title: "Baroque Art Details",
    category: "ambience",
    src: "/images/ambience.png",
    caption: "Detailed architectural wall moldings and vintage mirror framing"
  }
];
