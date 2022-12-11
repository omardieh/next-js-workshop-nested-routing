import users from "/database.json";

export async function getUsers() {
  const data = await users;
  return data;
}

export default async function handler(req, res) {
  const data = await getUsers();
  res.status(200).json(data);
}
