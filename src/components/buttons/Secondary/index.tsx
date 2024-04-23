import { Button } from '@mui/material';

const ButtonStyle = {
    backgroundColor: 'white', color: 'black', fontWeight: 700,
    transition: 'background-color color 0.8s ease',
    '&:hover': {
        backgroundColor: 'gray',
        color: 'white'
    },
}

const SecondaryBtn = ({ link, component, title }: any) => {
    return (
        <Button href={link} variant="contained" sx={ButtonStyle} download>
            {component} {title}
        </Button>
    );
}

export default SecondaryBtn;
