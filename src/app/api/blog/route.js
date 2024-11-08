import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'

const LoadDb = async () => {
    await connectDB();
}

LoadDb();

export async function GET(request) {

    return NextResponse.json({ message: 'API Working...' })
}

export async function POST(request) {
    const formData = await request.formData();
    const timeStamp = Date.now();
    const image = formData.get('image');

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;

    const blogData = {
        // title: `${}`
    }

    return NextResponse.json({ imgUrl })
}