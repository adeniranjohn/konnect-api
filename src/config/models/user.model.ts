export interface User {
  email: string;
  phone: string;
  address: string;
  rating: string;
  comments: Comment[];
}

export interface Comment {
  user: User;
  comment: string;
}
