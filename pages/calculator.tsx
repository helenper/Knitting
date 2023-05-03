import Calculator from '../components/Calculator/Calculator';
import { Heading } from '@chakra-ui/react';
import styles from '../styles.module.css';

export default function CalculatorPage() {
    return (
        <>
            <div>
                <Heading as="h1">Strikkekalkulator</Heading>
                <div>
                    Fyll inn antall masker du har nå, og antall masker du ønsker
                    å ha etter økning/felling, så vil kalkulatoren fortelle deg
                    hvordan du kan gå fram for å få en jevn økning/avfelling.
                </div>
                <div className={styles.calculator}>
                    <Calculator></Calculator>
                </div>
            </div>
        </>
    );
}
