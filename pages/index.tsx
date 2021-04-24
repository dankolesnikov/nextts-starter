import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
    return (
        <Layout>
            <h1>Hello Earth</h1>
            <Link href="/api/hello">
                Hello Earth API
            </Link>
            <br />
            <Link href="/api/countries/all">
                Countries API Prisma
            </Link>
        </Layout>
    )
}