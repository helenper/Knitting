import { Button } from '@chakra-ui/button';
import { Formik } from 'formik';
import { useState } from 'react';

import { Heading } from '@chakra-ui/react';
import styles from '../styles.module.css';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <Heading as="h1">Rundeteller</Heading>
            <div>
                <label>Runde nummer {counter}</label>
            </div>
            <div>
                <Button
                    onClick={() => setCounter(counter + 1)}
                    className={styles.button}
                >
                    +1 runde
                </Button>
                <Button onClick={() => setCounter(0)} className={styles.button}>
                    Nullstill
                </Button>
            </div>
        </div>
    );
}
