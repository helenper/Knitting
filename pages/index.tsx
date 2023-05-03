import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Heading } from '@chakra-ui/react';
import styles from '../styles.module.css';

// TODO: useTranslations
// TODO: auto sort imports with Prettier

export default function Home() {
    return (
        <>
            <Head>
                <title>Strikkemekka</title>
                <meta name="description" content="" />
            </Head>
            <main className={styles.main}>
                <Heading as="h1">Velkommen til Strikkemekka</Heading>
                <div className={styles.info}>
                    Dette er en samleside for strikkeoppskrifter og en
                    kalkulator for utregning av økning/felling av masker, pinne-
                    og utstyrsoversikt og rundeteller.
                </div>
            </main>
        </>
    );
}
