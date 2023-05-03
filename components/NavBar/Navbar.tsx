// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href="/">Hjem</Link>
            <Link href="/patterns">Oppskrifter</Link>
            <Link href="/calculator">Kalkulator</Link>
            <Link href="/needles">Pinne- og utstyrsoversikt</Link>
            <Link href="/counter">Rundeteller</Link>
            <Link href="/whislist">Ønskeliste</Link>
            <Link href="/friends">Venner</Link>
        </div>
    );
};
export default Navbar;

{
    /* <div>
<Button>
    <Link href="/patterns">Oppskrifter</Link>
</Button>
</div>
<div>
<Button>
    <Link href="/calculator">Kalkulator</Link>
</Button>
</div>
<div>
<Button>
    <Link href="/needles">Pinne- og utstyrsoversikt</Link>
</Button>
</div>
<div>
<Button>
    <Link href="/counter">Rundeteller</Link>
</Button>
</div>
<div>
<Button>
    <Link href="/whislist">Ønskeliste</Link>
</Button>
</div>
<div>
<Button>
    <Link href="/friends">Venner</Link>
</Button>
</div> */
}
