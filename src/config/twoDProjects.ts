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
    title: 'Miku',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
  {
    id: '2d-2',
    title: 'Raiden Shogun',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
  {
    id: '2d-3',
    title: 'Bochi the Rock',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
  {
    id: '2d-4',
    title: 'Mini',
    thumbnail: '/images/2d/thumbnail.jpeg',
    image: '/images/2d/thumbnail.jpeg',
  },
];

export const getTwoDProjectById = (id: string): TwoDProject | undefined => {
  return twoDProjects.find(project => project.id === id);
};
