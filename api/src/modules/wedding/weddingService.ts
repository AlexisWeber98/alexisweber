import db from "../../db.js";
const { Wedding } = db.models;

export const postGuestService = async (name: string, lastName: string) => {
  const [guest, created] = await Wedding.findOrCreate({
    where: { name, lastName },
    defaults: { name, lastName },
  });
  return { guest, created };
};

export const getAllGuests = async () => {
  const allGuests = await Wedding.findAll();

  if (!allGuests || allGuests.length === 0) {
    throw new Error("No guests found");
  }
  return allGuests;
};

export const deleteGuestService = async (id: string) => {
  const guest = await Wedding.destroy({ where: { id } });

  console.log("Destroy Response", guest);
};
