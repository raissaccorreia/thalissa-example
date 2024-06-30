import { Post } from '@prisma/client';

export class User {
  id: string;
  email: string;
  name?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  posts: Post[];
}
