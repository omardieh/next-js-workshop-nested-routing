import users from "/database.json";

export default function handler(req, res) {
  res.json(users.find((user) => user.user_id === +req.query.user_id));
}
