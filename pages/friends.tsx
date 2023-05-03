import List from '@/components/List/List';
import { Heading } from '@chakra-ui/react';

export default function Friends() {
    const friends = ['Mona', 'Eli', 'Thea', 'Ingeborg'];

    return (
        <div>
            <Heading as="h1">Venner</Heading>
            <div>
                Her ser du en liste over dine venner. Klikk inn på dem for å se
                deres utstyr og ønskelister.
                <List link={true} onClick={() => alert('Venns profil')}>
                    {friends}
                </List>
            </div>
        </div>
    );
}
