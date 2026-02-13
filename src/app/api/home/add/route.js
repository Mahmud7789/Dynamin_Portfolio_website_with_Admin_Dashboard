import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function POST(req) {
    try {

        await connectToDB();
        const extractData = await req.json(); // Take the data from the input form as JSON format.

        const saveData = await Home.create(extractData); // Save the data to the database using the Home model.

        if (saveData) {
            return NextResponse.json({
                success: true,
                message: "Data saved successfully"
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something goes wrong Please try again"
            });
        } 
    } catch (e) {
        console.log(e);
        
        return NextResponse.json({
            success: false,
            message: "Something goes wrong Please try again"
        });
    }
}