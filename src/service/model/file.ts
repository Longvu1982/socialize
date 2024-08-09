export type ImgurFile = {
  id: string;
  deletehash: string;
  name?: string;
  type: "image/jpeg";
  width: 2250;
  height: 3000;
  size: 913895;
  link: string;
  tags: [];
  datetime: 1723100516;
};

export type ImgurFileResponse = { data: ImgurFile; status: number; succcess: boolean };
