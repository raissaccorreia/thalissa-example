import { User } from '@prisma/client';

export class Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: User;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}
