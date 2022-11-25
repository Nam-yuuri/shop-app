import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { getAdminProduct } from '~/actions/productAction';

export default function Sumproducts() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.productsAdmin);
    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    console.log('products: ', products);

    const data = [];

    products &&
        products.forEach((item) => {
            data.push({
                name: item.name,
                value: item.Stock,
            });
        });
    return (
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
    );
}
