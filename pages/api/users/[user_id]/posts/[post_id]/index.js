import users from "/database.json";

export default function handler(req, res) {
  const { user_id, post_id } = req.query;

  res
    .status(200)
    .json(
      users
        .find((user) => user.user_id === +user_id)
        .posts.find((post) => post.post_id === +post_id)
    );
}
