import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';
import { getAdminProduct, getTopProducts } from '~/actions/productAction';

export default function ReCharts() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.productsAdmin);
    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    console.log('products: ', products);

    const product = [];

    products &&
        products.forEach((item) => {
            product.push({
                name: item.name_Compact,
                stock: item.Stock - item.sold,
                sold: item.sold,
            });
        });

    return (
        <div style={{marginTop: '20px'}}>
            <BarChart
                width={1255}
                height={400}
                data={product}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sold" stackId="a" fill="#8884d8" />
                <Bar dataKey="stock" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
