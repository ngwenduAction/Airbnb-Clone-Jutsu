// creating a save type using prisma client user

import { Listing, Reservation, User } from "@prisma/client";

export type safeListing = Omit<
  Listing,
  "createdAt"
> & {
  createdAt: string;
}

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: safeListing;
}

// creating our safe user
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};
