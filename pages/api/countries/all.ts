import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const countriesNames = await prisma.countries.findMany({
        where: {},
        distinct: 'name',
        select: {
            name: true
        }
    })
    console.log(countriesNames)

    res.status(200).json({ text: countriesNames })
}