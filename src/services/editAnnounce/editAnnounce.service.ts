import AppDataSource from "../../data-source";
import { Vehicles } from "../../entities/vehicles.entity";
import { IAnnounceRequest } from "../../interfaces/vehicles";

const updateAnnounce = async (id: number, data: IAnnounceRequest) => {
  const announceRepository = AppDataSource.getRepository(Vehicles);

  const announce = await announceRepository.findOne(id);

  if (!announce) {
    throw new Error(`Announce with id ${id} not found`);
  }

  announce.announceType = data.announceType;
  announce.title = data.title;
  announce.year = data.year;
  announce.km = data.km;
  announce.price = data.price;
  announce.description = data.description;
  announce.vehicleType = data.vehicleType;
  announce.image = data.image;

  await announceRepository.save(announce);

  return announce;
};

export default updateAnnounce;