import Link from 'next/link';

const Pattern = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link
                        target="_blank"
                        href="/pdf/TeddyPants.pdf"
                        rel="noopener noreferrer"
                    >
                        Teddy Pants
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        href="/pdf/HaraldsKjole.pdf"
                        rel="noopener noreferrer"
                    >
                        Haralds Kjole
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Pattern;
