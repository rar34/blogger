import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

const LoadDb = async ()=>{
    await connectDB();
}

LoadDb();

export async function GET(request) {

    return NextResponse.json({message: 'API Working...'})
}