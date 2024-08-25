import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';


export default function Examples(){
    return(
        <div>
            <Button>A button</Button>

            <h2>Using <code>as</code> Prop API</h2>
            <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
            </Stack>

            <h2>Heading with a Badge
                <Badge bg="secondary" as={Button}>
                    New posts
                </Badge>
            </h2>

            <Alert dismissible variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>Change this and that and try again.</p>
            </Alert>
        </div>
    )
}