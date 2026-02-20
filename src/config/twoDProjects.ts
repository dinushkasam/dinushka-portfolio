/**
 * 2D Design Projects Configuration
 * Simple cards with title and thumbnail
 */

export interface TwoDProject {
  id: string;
  title: string;
  thumbnail: string;
  image: string; // Full-size artwork
}

export const twoDProjects: TwoDProject[] = [
  {
    id: '2d-1',
    title: 'Character Illustration',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
  {
    id: '2d-2',
    title: 'Concept Art',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
  {
    id: '2d-3',
    title: 'Character Illustration',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
  {
    id: '2d-4',
    title: 'Digital Painting',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
];

export const getTwoDProjectById = (id: string): TwoDProject | undefined => {
  return twoDProjects.find(project => project.id === id);
};
