import { BasketItem, OfferResult } from "@/types";

export function calculateOffers(items: BasketItem[]): OfferResult[] {
  const offers: OfferResult[] = [];

  const cheese = items.find((i) => i.id === "cheese");
  if (cheese && cheese.quantity >= 2) {
    const free = Math.floor(cheese.quantity / 2);
    offers.push({
      description: "Buy 1 Cheese get 1 free",
      saving: free * cheese.price,
    });
  }

  const soup = items.find((i) => i.id === "soup");
  const bread = items.find((i) => i.id === "bread");
  if (soup && bread) {
    const discount =
      Math.min(soup.quantity, bread.quantity) * (bread.price / 2);
    offers.push({
      description: "Soup + Bread 50% off",
      saving: discount,
    });
  }

  const butter = items.find((i) => i.id === "butter");
  if (butter) {
    offers.push({
      description: "1/3 off Butter",
      saving: butter.quantity * (butter.price / 3),
    });
  }

  return offers;
}
