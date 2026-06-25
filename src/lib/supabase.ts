import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin_url: string | null;
  github_url: string | null;
  twitter_url: string | null;
  avatar_url: string | null;
  order_index: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string | null;
  industry: string | null;
  description: string;
  detailed_description: string | null;
  category: string;
  technologies: string[];
  image_url: string | null;
  case_study_url: string | null;
  featured: boolean;
  order_index: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  author_title: string;
  company: string | null;
  rating: number;
  order_index: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
  author_name: string | null;
  read_time: number;
  image_url: string | null;
  published: boolean;
  published_at: string | null;
}

export interface ContactInquiry {
  full_name: string;
  company_name: string | null;
  email: string;
  phone: string | null;
  service_needed: string | null;
  budget_range: string | null;
  project_description: string | null;
}