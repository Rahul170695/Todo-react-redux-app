import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export default function IconLabelButtons(props) {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[900]),
        backgroundColor: indigo[500],
        '&:hover': {
          backgroundColor: indigo[700],
        },
      }));
  return (
    <Stack direction="row" spacing={2}>
      <ColorButton variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={props.onClick} >
        Clear
      </ColorButton>
    </Stack>
  );
}
