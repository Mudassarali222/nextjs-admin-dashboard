"use client"
import { Button, Table } from 'antd';
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

const Report = () => {

    const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Summary',
            dataIndex: 'summary',
            key: 'summary',
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
        },
    ];

    const data = [
        {
            key: '1',
            category: 'Eggs',
            summary: 'Total Eggs: 500',
            details: 'Details about egg production',
        },
        {
            key: '2',
            category: 'Birds',
            summary: 'Total Birds: 100',
            details: 'Details about bird management',
        },
        {
            key: '3',
            category: 'Feeding',
            summary: 'Feed Consumed: 200kg',
            details: 'Details about feeding schedule',
        },
        {
            key: '4',
            category: 'Health',
            summary: 'Healthy Birds: 90%',
            details: 'Details about health checkups',
        },
    ];

    const tableRef = useRef<any>();

    const handlePrint = useReactToPrint({
        content: () => tableRef.current,
    });

    return (
        <React.Fragment>
            <div ref={tableRef}>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
            <Button className='mt-5' type="primary" onClick={handlePrint}>
                Export to PDF
            </Button>
        </React.Fragment>
    )
}

export default Report