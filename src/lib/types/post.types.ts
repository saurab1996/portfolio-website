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
  faqs?: string | null;
  getInTouchCta: string;
  getInTouchCtaDescription: string;
}

export interface Post {
  id: string;
  databaseId: number;
  title: string;
  excerpt: string;
  slug: string;
  categories: { nodes: Category[] };
  content: string;
  author: { node: Author };
  blogFields: BlogFields;
  modifiedGmt: string;
  dateGmt: string;
}

type PostListKeys =
  | 'title'
  | 'excerpt'
  | 'slug'
  | 'modifiedGmt'
  | 'categories'
  | 'author'
  | 'databaseId';

type PostListBlogKeys =
  | 'readTime'
  | 'thumbnailAlt'
  | 'thumbnailFullImageUrl'
  | 'thumbnailUrl';

export type PostList = Pick<Post, PostListKeys> & {
  blogFields: Pick<Post['blogFields'], PostListBlogKeys>;
};

export type PostContent = Omit<Post, PostListKeys> & {
  blogFields: Omit<Post['blogFields'], PostListBlogKeys>;
};

export interface PostsData {
  generatedAt: string;
  total: number;
  posts: PostList[];
}
