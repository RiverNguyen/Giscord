import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { serverId: string } }
) => {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.delete({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { serverId: string } }
) => {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { name, image } = await req.json();

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
      data: {
        name,
        image,
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_UPDATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
