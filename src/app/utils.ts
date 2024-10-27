export const handleScroll = (item: string) => {
  const element = document.getElementById(item.toLowerCase().replace(" ", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll effect
  }
};
