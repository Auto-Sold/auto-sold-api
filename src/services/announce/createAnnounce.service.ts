import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
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
    image
}: IAnnounceRequest) => {
    const vehicleRepository = AppDataSource.getRepository(Vehicles)
    const vehicles = await vehicleRepository.find()

    const vehicle = new Vehicles()
    vehicle.announceType = announceType;
    vehicle.title = title;
    vehicle.year = year;
    vehicle.km = km;
    vehicle.price = price;
    vehicle.description = description;
    vehicle.vehicleType = vehicleType;
    vehicle.image = image;
    vehicle.isActive = true;
    vehicle.createdAt = new Date();
    vehicle.updatedAt = new Date();

    vehicleRepository.create(vehicle)
    await vehicleRepository.save(vehicle)

    return { ...vehicle }
};

export default createAnnounceService