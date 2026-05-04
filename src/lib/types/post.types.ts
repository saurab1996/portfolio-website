export interface Category {
  name: string;
  slug: string;
}

export interface Author {
  firstName: string;
  lastName: string;
}

export interface BlogFields {
  metaDescription: string;
  metaTitle: string;
  thumbnailFullImageUrl: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  readTime: string | null;
}

export interface Post {
  id: string;
  databaseId: number;
  title: string;
  excerpt: string;
  slug: string;
  categories: { nodes: Category[] };
  author: { node: Author };
  blogFields: BlogFields;
  modifiedGmt: string;
  dateGmt: string;
}

export interface PostsData {
  generatedAt: string;
  total: number;
  posts: Post[];
}
