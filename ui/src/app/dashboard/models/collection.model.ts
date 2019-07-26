export class Collection {
  _id: string;
  name: string;
  description: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}
