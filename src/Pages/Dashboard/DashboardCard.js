import { Card, Typography, Stack, CardContent, Skeleton } from '@mui/material';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const DashboardCard = ({ ele, index }) => {
    return (
        <Card sx={{ width: 9 + "rem", height: 7 + "rem", boxShadow: 3 }} >
            <CardContent sx={{ margin: 1 }} >
                <Stack alignItems='center' justifyContent='center' gap={2} direction='row'>
                    {index % 2 === 0 ? index === 0 ? <ShoppingCartIcon fontSize='large' color='success' /> : <AccountCircleIcon color='info' fontSize='large' /> : index === 1 ? <InventoryIcon fontSize='large' color='warning' /> : <CurrencyRupeeIcon fontSize='large' color='secondary' />}
                    <Stack>
                        <Typography sx={{ fontSize: 14 }}
                            borderBottom={1}
                            borderColor="text.secondary"
                            color="text.secondary" gutterBottom>
                            {ele.title}
                        </Typography>
                        {!ele.value || ele.value === "0" ? <Skeleton variant="h4" sx={{ width: 3 + "rem", fontSize: 14, padding: 2 }}></Skeleton> : <Typography variant="h5" >
                            {ele.value}
                        </Typography>
                        }
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
export default DashboardCard;