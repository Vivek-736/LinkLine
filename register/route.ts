import bcrypt from 'bcrypt';
import prisma from "@/app/libs/prismadb"
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, password } = body;
        
        if(!email || !name ){
            return new NextResponse('Missing information', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });
        return NextResponse.json(user);
    }
    catch (error) {
        console.log(error, "Registration Error");
        return new NextResponse('Something went wrong', { status: 500 });
    }
}