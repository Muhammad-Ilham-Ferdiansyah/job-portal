import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
    const featuredJobs = await prisma.job.findMany({
        take: 6,
        include: {
            CategoryJob: true,
            Company: {
                include: {
                    CompanyDetail: true
                }
            }
        }
    })

    return NextResponse.json(featuredJobs);
}