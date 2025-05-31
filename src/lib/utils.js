import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Dynamic asset path helper
export function getAssetPath(path) {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For Vercel
  if (process.env.NODE_ENV === 'development' || process.env.VERCEL === '1') {
    return `/${cleanPath}`;
  }
  
  // For GitHub Pages
  if (process.env.GITHUB_PAGES === 'true') {
    return `/AlgorithmVisualizer/${cleanPath}`;
  }
  
  return `/${cleanPath}`;
}
