import ApiService from "../api-services";
import { ImgurFileResponse } from "../model";
// import { PostType } from "../../../server/src/db/posts";

const baseImageUrl = "https://api.imgur.com/3";
const imageHeader = { Authorization: `Client-ID ${import.meta.env.VITE_IMGURL_CLIENT_ID}` };

const imgurConfig = { baseURL: baseImageUrl, headers: imageHeader };

export async function uploadImage(data: A) {
  return ApiService.fetchData<ImgurFileResponse>({
    ...imgurConfig,
    url: "/image",
    method: "post",
    data,
  });
}
