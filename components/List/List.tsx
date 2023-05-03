import { Children } from 'react';
import ListElement from './ListElement';

type ListType = {
    link?: boolean;
    onClick?: string;
    children: Array<string>;
};
const List: React.FC<ListType> = ({ link, onClick, children }) => {
    return (
        <div>
            {link == true ? (
                <ul>
                    {Children.map(children, (childe) => (
                        <ListElement>
                            <a onClick={onClick}>{childe}</a>
                        </ListElement>
                    ))}
                </ul>
            ) : (
                <ul>
                    {Children.map(children, (childe) => (
                        <ListElement>{childe}</ListElement>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default List;
