import users from "/database.json";

export default function handler(req, res) {
  res.status(200).json(users);
}
