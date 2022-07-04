import React from "react";
import  Box  from "@mui/material/Box";
import Button from "@mui/material/Button";
const BoxSx =() =>{
    return (
      <Box
        sx={{
          width: 300,
          height: 200,
          borderRadius: 4,
          padding: 12,
          backgroundColor: 'purple',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
          opacity: [0.9, 0.8, 0.7],
        }}
        
        >
        <Box
        sx={{
            fontSize:30,
        }}>
            Ganancias del dia
        </Box>
        <Box>
        
        </Box>
        <image>
                <img src={logo}></img>
            </image>
      </Box>
    );
  }
export default BoxSx
