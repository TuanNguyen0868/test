import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{textAlign: 'center'}}>
        
        <TextField
          id="standard-search"
          label="Search "
          type="search"
          variant="standard"
        />
      </div>
    </Box>
  );
}
