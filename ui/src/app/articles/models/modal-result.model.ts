export class ModalResult {
  imageUpdated: boolean;

  article: {
    _id: any;
    title: string;
    excerpt: string;
    body: string;
    file?: File;
  };
}
