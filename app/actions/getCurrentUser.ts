import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
    return await getServerSession(authOptions);
}

// get current user function
export default async function getCurrentUser() {
    try {
    //   this initiates our sessions
    const session = await getSession();

    // check if the session is correct
    if (!session?.user?.email) {
        return null;
    }

    // this finds the current user
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email as string
        }
    });

    // this checks if there's no current user
    if (!currentUser) {
        return null;
    }

    // if all checks pass
    return {
        // this is how we want to pass our objects
        ...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified: currentUser.emailVerified?.toISOString() || null
    };
    } catch (error: any) {
        return null;
    }
}