import axios from 'axios';
import { GetServerSideProps } from 'next';

interface BlogPost {
  slug: string;
  date: string;
}

const generateSiteMap = (blogPosts: BlogPost[]): string => {
  const baseUrl = 'https://www.tritekacademy.co.uk';

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/courses</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/careers</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/resources</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/mentors</loc>
    <lastmod>2024-12-29</lastmod>
  </url>
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
  </url>
  `).join('')}
</urlset>`;
};

const SiteMap = () => {
  // This component will not actually be rendered
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const response = await axios.get('https://dev-jozz-portfolio.pantheonsite.io/wp-json/wp/v2/posts?_embed');
    const blogPosts: BlogPost[] = response.data;

    const sitemap = generateSiteMap(blogPosts);

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    if (error instanceof Error) {
        console.error('Error generating sitemap:', error.message);
        console.error('Error details:', (error as any).response?.data || error);
      } else {
        console.error('Unexpected error:', error);
      }

    res.statusCode = 500;
    res.end();

    return {
      props: {},
    };
  }
};

export default SiteMap;