import React, { useState, useContext, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { productContext } from '../../Dynamic Data/dataContext';
import { useNavigate } from 'react-router-dom';

const InventoryFilter = () => {
    const [data, setData] = useState('');
    //destructure according to index[products, setProducts, carts, setCarts, filteredProducts, setFilteredProducts]
    const [products, , , , filteredProducts, setFilteredProducts] = useContext(productContext);
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        //let unique = [...new Set(myArray)];  // unique Elements
        setCategory([...new Set(products.map((ele) => ele.category))]);
    }, [])

    useEffect(() => {
        if (data === "") {
            setFilteredProducts(products);
        }
        else {
            setFilteredProducts(products.filter((ele) => ele.category === data));
        }
        console.log(filteredProducts);
    }, [data])

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={data}
                label="FilterData"
                onChange={(e) => {
                    setData(e.target.value)
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {category.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>
                )}
            </Select>
        </FormControl>
    );
}

export default InventoryFilter;