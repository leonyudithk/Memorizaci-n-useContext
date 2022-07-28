import React, { memo } from 'react';
import Button from 'react-bootstrap/Button'

const ShowIncrement = memo(({incremento}) => {
    console.log('Me estoy renderizando desde ShowIncrement')
    return (
        <div>
            <Button variant="danger" onClick={()=>incremento(5)}>Incrementar</Button>
            
        </div>
    );
});

export default ShowIncrement;