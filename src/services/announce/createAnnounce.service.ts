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
    galeryImage1,
    galeryImage2,
    galeryImage3,
    galeryImage4,
    galeryImage5,
    galeryImage6,
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
        galeryImage1: galeryImage1,
        galeryImage2: galeryImage2,
        galeryImage3: galeryImage3,
        galeryImage4: galeryImage4,
        galeryImage5: galeryImage5,
        galeryImage6: galeryImage6,
    })

    await vehicleRepository.save(vehicle)

    return vehicle
};

export default createAnnounceService