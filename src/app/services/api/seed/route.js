import { connectDB } from "@/Lib/connectDB"
import { services } from "@/Lib/services";

export const GET = async () =>{
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        await servicesCollection.deleteMany();
        const resp = await servicesCollection.insertMany(services);
        return Response.json({message : "seeded successfully"})
    } catch (error) {
        console.log(error);
    }
}