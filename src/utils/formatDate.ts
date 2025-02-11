export const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) return "Unavailable";
  
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
  
    // Format the date as "Month Day, Year" (e.g., "January 25, 2025")
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  