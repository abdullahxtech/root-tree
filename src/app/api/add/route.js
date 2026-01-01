import dbConnect from "@/lib/mongodb";
import User from "@/models/users.modal.js"
import { NextResponse } from "next/server";

await dbConnect();

 
export async function POST(request) {
    const body = await request.json();

    const exist = await User.findOne({handle: body.handle});
    if(exist) {
        return NextResponse.json({success: false,error: true,message: "Username already exists",status: 400})
    }

    const user = await User.create(body);

    return NextResponse.json({success: true,error: false,message: "Handle Created Successfully"})
}