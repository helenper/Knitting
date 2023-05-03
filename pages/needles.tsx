import List from '@/components/List/List';
import { Heading } from '@chakra-ui/react';

export default function Needles() {
    const roundNeedles = ['Str 3 60cm', 'Str 3 40cm', 'Str 5 80cm'];
    const doubleNeedles = ['Str 3', 'Str 4', 'Str 5', 'Str 6'];
    const utility = ['Målebånd', 'Pinnestørrelse-måler', 'Saks', 'Ullnåler'];
    return (
        <div>
            <Heading as="h1">Pinner og utstyr</Heading>
            <div>
                <Heading as="h3" size="sm">
                    Rundpinner:
                </Heading>
                <List>{roundNeedles}</List>
            </div>
            <div>
                <Heading as="h3" size="sm">
                    Strømpepinner:
                </Heading>
                <List>{doubleNeedles}</List>
            </div>
            <div>
                <Heading as="h3" size="sm">
                    Utstyr:
                </Heading>
                <List>{utility}</List>
            </div>
        </div>
    );
}
