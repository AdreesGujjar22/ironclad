export const SITE_URL = "https://ironcladcommercialfloors.ca";

function cleanServiceSlug(slug: string): string {
  return slug.replace(/-vancouver-bc$/, "");
}

/** Maps the legacy in-app page keys to real URL pathnames. */
export function getPathForRoute(page: string, param?: string): string {
  switch (page) {
    case "home":
    case "":
      return "/";
    case "about":
    case "about-ironclad-commercial-floors-vancouver-bc":
      return "/about";
    case "services":
      return "/services";
    case "flooring-installation-vancouver-bc":
    case "flooring-installation":
      return "/services/flooring-installation";
    case "flooring-repair-vancouver-bc":
    case "flooring-repair":
      return "/services/flooring-repair";
    case "flooring-replacement-vancouver-bc":
    case "flooring-replacement":
      return "/services/flooring-replacement";
    case "commercial-epoxy-flooring-vancouver-bc":
    case "commercial-epoxy-flooring":
      return "/services/commercial-epoxy-flooring";
    case "garage-epoxy-flooring-vancouver-bc":
    case "garage-epoxy-flooring":
      return "/services/garage-epoxy-flooring";
    case "service-detail":
      return param ? `/services/${cleanServiceSlug(param)}` : "/services";
    case "projects":
      return "/projects";
    case "blogs":
      return "/blogs";
    case "blog-detail":
      return param ? `/blogs/${param}` : "/blogs";
    case "locations":
      return "/locations";
    case "location-detail":
      return param ? `/locations/${param}` : "/locations";
    case "contact":
    case "contact-ironclad-commercial-floors-vancouver-bc":
      return "/contact";
    default:
      return page.startsWith("/") ? page : `/${page}`;
  }
}

/** Page key used by the Navbar for active-link highlighting. */
export function pageKeyFromPath(pathname: string): string {
  const path = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!path) return "home";
  const segments = path.split("/");
  const root = segments[0].toLowerCase();
  if (segments.length >= 2) {
    if (root === "services") return "service-detail";
    if (root === "locations") return "location-detail";
    if (root === "blogs") return "blog-detail";
  }
  return root;
}
