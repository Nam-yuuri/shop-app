import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';
import { getAdminProduct, getTopProducts } from '~/actions/productAction';

export default function LowStock() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.productsAdmin);
    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    // console.log('products: ', products);

    const product = [];

    products &&
        products.forEach((item) => {
            if (item.Stock <= 5 && item.Stock > 0) {
                product.push({
                    name: item.name,
                    stock: item.Stock,
                    sold: item.sold,
                });
            }
        });

    return (
        <div style={{ marginTop: '20px' }}>
            <BarChart
                width={600}
                height={400}
                data={product}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
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
