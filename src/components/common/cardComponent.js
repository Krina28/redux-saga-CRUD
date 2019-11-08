import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';

const CardComponent = (props) => {
    return (
        <div>
            <Card body inverse color="success">
                {props.header && <CardHeader>{props.header}</CardHeader>}
                <CardBody>
                    <CardText>{props.content}</CardText>
                </CardBody>
                {props.footer && <CardFooter>{props.footer}</CardFooter>}
            </Card>
        </div>
    );
};

export default CardComponent;
