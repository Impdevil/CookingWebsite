import styles from "./layout.module.css"
import Head from "next/head"
import Image from "next/image"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import NavBar from "./NavBar"

const name = "Granny's Kitchen"
export const siteTitle= "Grannys Kitchen"


export default function Layout({children, home}) {
    return (<div>
        
        <Head>
            <link rel="icon" href="/facicon.ico"/> 
            <meta name = "description"
            content="make some amazing world inspired easy meals"/>
            <meta property="og:image"
            content={`https:og-image.vercel.app/${encodeURI(siteTitle)}
            .png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle}/>

        </Head>
        <header className={styles.header}>
            <NavBar home/>
            <div className={styles.container}>
            {home? (
            <>
                
                    <h1>potato</h1>
               
            </>
            ): (
            <>

                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                </h2>
            
            </>
            )}
            </div>
        </header>
        <main>
            {children}
        </main>
        {!home && (
            <div classname = {styles.backToHome}>
                <Link href="/">
                    <a>  Back to Home </a> 
                </Link>
                </div>
        )}
</div>)
}

