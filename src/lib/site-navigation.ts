/**
 * URL mapping for the Ironclad site — ported from the original App.tsx router.
 * Pages navigate by logical page name + optional param; this resolves the URL path.
 */
export function cleanServiceSlug(slug: string): string {
  return slug.replace(/-vancouver-bc$/, '');
}

export function getPathForRoute(page: string, param?: string): string {
  switch (page) {
    case 'home':
    case '':
      return '/';
    case 'about':
    case 'about-ironclad-commercial-floors-vancouver-bc':
      return '/about';
    case 'services':
      return '/services';
    case 'flooring-installation-vancouver-bc':
    case 'flooring-installation':
      return '/services/flooring-installation';
    case 'flooring-repair-vancouver-bc':
    case 'flooring-repair':
      return '/services/flooring-repair';
    case 'flooring-replacement-vancouver-bc':
    case 'flooring-replacement':
      return '/services/flooring-replacement';
    case 'commercial-epoxy-flooring-vancouver-bc':
    case 'commercial-epoxy-flooring':
      return '/services/commercial-epoxy-flooring';
    case 'garage-epoxy-flooring-vancouver-bc':
    case 'garage-epoxy-flooring':
      return '/services/garage-epoxy-flooring';
    case 'service-detail':
      return param ? `/services/${cleanServiceSlug(param)}` : '/services';
    case 'projects':
      return '/projects';
    case 'blogs':
      return '/blogs';
    case 'blog-detail':
      return param ? `/blogs/${param}` : '/blogs';
    case 'locations':
      return '/locations';
    case 'location-detail':
      return param ? `/locations/${param}` : '/locations';
    case 'contact':
    case 'contact-ironclad-commercial-floors-vancouver-bc':
      return '/contact';
    default:
      return page.startsWith('/') ? page : `/${page}`;
  }
}
