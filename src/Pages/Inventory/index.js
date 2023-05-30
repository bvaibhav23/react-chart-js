import React, { useEffect, useContext } from 'react'

import { Box, Container, Typography, Stack } from '@mui/material';
import InventoryFilter from './InventoryFilter';
import InventoryTable from './InventoryTable';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../Dynamic Data/dataContext';

const Inventory = () => {
  //destructure according to index[products, setProducts, carts, setCarts, filteredProducts, setFilteredProducts]
  const [products] = useContext(productContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin | Inventory";
    if (!products) {
      navigate('/');
    }
  },
    // eslint-disable-next-line
    []);

  return (<Container >
    {products &&
      <Box sx={{ boxShadow: 5 }}>
        <Typography variant='h3' bgcolor="lightcoral" align='center'>Inventory</Typography>
        <Stack direction="row" bgcolor='white' useFlexGap flexWrap="wrap" justifyContent='flex-end'><InventoryFilter /></Stack>
        <InventoryTable />
      </Box>
    }
  </Container>
  );
}

export default Inventory;