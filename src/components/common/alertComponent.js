import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const AlertComponent = (props) => {
    const [visibleAlert, setVisible] = useState(true);

    const onDismissAlert = () => setVisible(false);

    return (
        <>
            <Alert color={props.type} isOpen={visibleAlert} toggle={onDismissAlert}>
                {props.message}
            </Alert>
        </>
    );
};

export default AlertComponent;
