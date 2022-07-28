import React, { memo } from 'react';

//-Memo - devuelve el componente Memorizado
const Small = memo(({valor}) => {
    console.log('Me estoy renderizando desde SMALL')
    return (
        <div>
            <small>{valor}</small>
        </div>
    );
});

export default Small;