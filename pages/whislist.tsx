import List from '@/components/List/List';
import { Heading } from '@chakra-ui/react';

export default function Wishlist() {
    const whishes = ['Str 3 60cm', 'Str 3 40cm', 'Str 5 80cm'];
    return (
        <div>
            <Heading as="h1">Min ønskeliste</Heading>
            <div>
                <List>{whishes}</List>
            </div>
        </div>
    );
}
