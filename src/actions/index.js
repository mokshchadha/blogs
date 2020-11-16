import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const res = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: res.data,
    });
  };
};
