import AppDataSource from "../../data-source";
import { Vehicles } from "../../entities/vehicles.entity";
import { IAnnounceRequest } from "../../interfaces/vehicles";

const createAnnounceService = async ({
    announceType,
    title,
    year,
    km,
    price,
    description,
    vehicleType,
    image,
   
}: IAnnounceRequest, id?: string) => {
    const vehicleRepository = AppDataSource.getRepository(Vehicles)

    const vehicle = vehicleRepository.create({
        announceType: announceType,
        title: title,
        year: year,
        km: km,
        price: price,
        description: description,
        vehicleType: vehicleType,
        createdAt: new Date(),
        userId: id,
        updatedAt: new Date(),
        image: image,
       
    })

    await vehicleRepository.save(vehicle)

    return vehicle
};

export default createAnnounceService