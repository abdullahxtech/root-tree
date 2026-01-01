import dbConnect from "@/lib/mongodb";
import User from "@/models/users.modal.js"
import { NextResponse } from "next/server";

await dbConnect();

export async function GET(request, { params }) {
    try {
        const { handle } = await params;
        const user = await User.findOne({ handle: handle });

        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: false, data: user },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}