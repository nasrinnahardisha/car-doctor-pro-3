import { connectDB } from "@/Lib/connectDB"
import { services } from "@/Lib/services";
import { NextResponse } from "next/server";

export const GET = async () =>{
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        await servicesCollection.deleteMany();
        const resp = await servicesCollection.insertMany(services);
        return NextResponse.json({message : "seeded successfully"})
    } catch (error) {
        return NextResponse.json({message : "no data found", error})

    }
}