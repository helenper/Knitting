import React from 'react';

type ListElementType = {
    children: string;
};

const ListElement: React.FC<ListElementType> = ({ children }) => {
    return (
        <div>
            <li>{children}</li>
        </div>
    );
};

export default ListElement;
