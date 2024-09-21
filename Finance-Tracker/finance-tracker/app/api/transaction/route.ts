import { db as prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import getCurrentUser from "@/lib/getCurrentUser";

export async function POST(request: Request,) {
    const user = await getCurrentUser();
    const body = await request.json();

    if (!user) return NextResponse.error();
    const { investment, rateOfInterest, timePeriod, investmentType, timeUnit, returns, totalValue } = body;

    const roi = parseFloat(rateOfInterest);
    await prisma.historicalData.create({ data: { investmentType, investmentAmount: parseFloat(investment), rateOfInterest: roi, timePeriod: timePeriod + timeUnit, return: returns, totalReturns: totalValue, userId: user.id } });
    return NextResponse.json({ success: true });
}