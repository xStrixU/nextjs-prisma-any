import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function IndexPage() {
  const user = await prisma.user.findFirst();

  return <h1>Index Page</h1>;
}
