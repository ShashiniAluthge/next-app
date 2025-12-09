import { NextResponse } from "next/server";
import schema from "./schema";
import { stat } from "fs";
import prisma from "@/prisma/client";

export async function GET(request: Request) {

    const products = await prisma.product.findMany();

    return NextResponse.json(products);
}

export async function POST(request: Request) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error, { status: 400 });
    }

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct, { status: 201 });
}