import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layouts";


const FoodPic = () => (        
    <Image src="/images/profile.jpg"
    height={144}
    width={144}
    alt="food name"
    />
)


export default function ShowDish() {
    return (
    <Layout potato>
    <Head> 
        <title>Dish name</title>

    </Head>
    <h1> a dish </h1>
        <FoodPic/>
    <h2>
        <Link href="/"><a>back to home</a></Link>
    </h2>
    </Layout>
    )
}