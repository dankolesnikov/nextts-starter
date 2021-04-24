import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const countries = await prisma.countries.findMany()
    console.log(countries)

}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
