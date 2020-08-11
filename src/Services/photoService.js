import { Http } from "Utils";

export const getPhotoService = () => Http.get("/photos");
// export const updateTodoService = (payload) =>
//   Http.patch(`/todo/${payload.id}`, payload);
// export const deleteTodoService = (id) => Http.delete(`/todo/${id}`);
export const Requests = {
  fetchPhotos: "/photos",
  fetchRandom: "/photos/random",
  fetchCollection: "/collections",
  fetchFeatured: "/collections/featured",
};
