import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

const LoadDb = async ()=>{
    await connectDB();
}

LoadDb();

export async function GET(request) {

    return NextResponse.json({message: 'API Working...'})
}

export async function POST(request) {
    const formData = await request.formData();
    const timeStamp = Date.now();
    const image = formData.get('image')
}