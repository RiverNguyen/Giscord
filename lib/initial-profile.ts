import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      image: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};