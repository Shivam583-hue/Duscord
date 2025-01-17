import { currentUser } from '@clerk/nextjs/server';

import db from '@/lib/db';

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error('User is not authenticated. Redirect to sign-in.');
  }

  const profile = await db.profile.findFirst({
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
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      imageUrl: user.imageUrl || '',
      email: user.emailAddresses?.[0]?.emailAddress || '',
    },
  });

  return newProfile;
};
