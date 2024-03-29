import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const About = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    )
}

export default About