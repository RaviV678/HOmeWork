// // import { assword } from "@mui/icons-material";
// import * as yup from "yup";
// const userSchema= yup.object().shape({
//     // name:yup.string().required(),
//     email:yup.string().email().required(),
//     password:yup.string().min(4).max(10)
// })

// export default userSchema;

import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

export default function Valdil() {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        height="680"
        image="image/logo.png"
        alt=""
      />
      
     
    </Card>
  );
}
