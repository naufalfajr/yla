import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateNews(isoString: string): string {
  const date = new Date(isoString);

  // Define the desired formatting options
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short', // 'Sep'
    year: 'numeric'
  };

  // Format the date using a fixed locale (en-GB is good for "Day Month Year")
  const formattedDate = date.toLocaleDateString('id-ID', options);

  // The output might be "14 Sep 2025" or "14 Sept 2025" depending on the environment.
  return formattedDate;
}