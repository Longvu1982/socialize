import ApiService from "../api-services";
// import { PostType } from "../../../server/src/db/posts";

export async function createPost(data: A) {
  return ApiService.fetchData<A>({
    url: "/post/create-post",
    method: "post",
    data,
  });
}
