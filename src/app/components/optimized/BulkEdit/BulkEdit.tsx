import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import SubHeader from '../UiKits/SubHeader';
import { useTranslation } from 'react-i18next';
import Button from '../Buttons/Button';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect } from 'react';
import { getBulkPrices } from 'src/app/store/slices/productsPage/bulkPrices/bulkPricesAsyncThunks';

const BulkEdit = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    // const { allBulks } = useAppSelector((state) => state.bulkEdit);

    // Fake data for testing
    const allBulks = [
        { product_id: 123, from: 1, to: 100, price: 200 },
        { product_id: 456, from: 10, to: 50, price: 150 },
        { product_id: 789, from: 20, to: 60, price: 175 },
    ];

  
    useEffect(() => {
        dispatch(getBulkPrices());
    }, [dispatch]);

    const bulkHeaders = [
        { title: t('Product id') },
        { title: t('from') },
        { title: t('to') },
        { title: t('price') },
        // { title: t('bulk price') },
    ];

    const styleInput = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none',
            },
            '&:hover fieldset': {
                border: 'none',
            },
            '&.Mui-focused fieldset': {
                border: 'none',
            },
        },
    };

    const cellStyle = {
        padding: '6px 3px',
        border: '1px solid rgba(224, 224, 224, 1)',
    };

    return (
        <>
            <SubHeader title={t("Bulk edit")}>
                <Button variant="secondary">{t("Discard")}</Button>
                <Button>{t("Save Changes")}</Button>
            </SubHeader>
            <div className='custom_container py-5'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {bulkHeaders.map((header, index) => (
                                    <TableCell
                                        key={index}
                                        align="center"
                                        className='bg-light-2 text-title text-sm'
                                        style={{ padding: '8px', border: '1px solid rgba(224, 224, 224, 1)' }}
                                    >
                                        {header.title}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allBulks.map((bulk, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    <TableCell
                                        align="center"
                                        className='text-title text-sm'
                                        style={cellStyle}
                                    >
                                        <TextField
                                            defaultValue={bulk.product_id}
                                            fullWidth
                                            size="small"
                                            sx={styleInput}
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        className='text-title text-sm'
                                        style={cellStyle}
                                    >
                                        <TextField
                                            defaultValue={bulk.from}
                                            fullWidth
                                            size="small"
                                            sx={styleInput}
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        className='text-title text-sm'
                                        style={cellStyle}
                                    >
                                        <TextField
                                            defaultValue={bulk.to}
                                            fullWidth
                                            size="small"
                                            sx={styleInput}
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        className='text-title text-sm'
                                        style={cellStyle}
                                    >
                                        <TextField
                                            defaultValue={bulk.price}
                                            fullWidth
                                            size="small"
                                            sx={styleInput}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default BulkEdit;
