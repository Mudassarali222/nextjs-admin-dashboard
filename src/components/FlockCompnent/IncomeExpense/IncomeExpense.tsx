"use client"

import CustomForm from "@/components/CustomForm/CustomForm";
import { incomeExpenseFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Dropdown, Form, Input, InputNumber, MenuProps, Modal, Select, Space, Table, Tabs, TabsProps, Tag } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const { Option } = Select;

const IncomeExpense = ({ flockId }: any) => {
    console.log('Line 10:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Birds');
    const [type, setType] = useState<string>('');
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    const columns = [
        {
            title: 'Purpose',
            dataIndex: 'purpose',
            key: 'Purpose',
        },
        {
            title: 'Birds Count',
            dataIndex: 'bird_count',
            key: 'Birds Count',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'Type',
            render: (record: any) => {
                return record === 'In' ? <Tag color="success">Income</Tag> : <Tag color="error">Expense</Tag>;
            }
        },
        {
            title: 'Ammount',
            dataIndex: 'ammount',
            key: 'Ammount',
        },
        {
            title: 'Payment Status',
            dataIndex: 'payment_status',
            key: 'Payment Status',
        },
        {
            title: 'Created Date',
            dataIndex: 'date',
            key: 'Created Date',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'Description',
        },
        {
            title: 'Actions',
            //   dataIndex: 'action',
            key: 'Actions',

            render: (record: any) => {
                return <>
                    <Space>
                        <EditOutlined onClick={() => {
                        }}
                            className="text-blue-500"
                        />
                        <DeleteOutlined className="text-red-500" />
                    </Space>
                </>
            }
        },

    ];

    const dataSource = [
        {
            key: '1',
            purpose: 'Purchase feed',
            bird_count: 20,
            type: 'Out',
            ammount: 100,
            payment_status: 'Paid',
            date: '2024-08-19',
            description: 'Purchased feed for the birds',
        },
        {
            key: '2',
            purpose: 'Sold eggs',
            bird_count: 50,
            type: 'In',
            ammount: 200,
            payment_status: 'Pending',
            date: '2024-08-18',
            description: 'Sold eggs at the market',
        },
        {
            key: '3',
            purpose: 'Veterinary services',
            bird_count: 30,
            type: 'Out',
            ammount: 150,
            payment_status: 'Paid',
            date: '2024-08-17',
            description: 'Paid for veterinary checkups',
        },
        {
            key: '4',
            purpose: 'Sold birds',
            bird_count: 10,
            type: 'In',
            ammount: 300,
            payment_status: 'Paid',
            date: '2024-08-16',
            description: 'Sold some birds to a local farmer',
        },
        {
            key: '5',
            purpose: 'Feed transport',
            bird_count: 0,
            type: 'Out',
            ammount: 50,
            payment_status: 'Pending',
            date: '2024-08-15',
            description: 'Transported feed from supplier',
        },
        {
            key: '6',
            purpose: 'Sold chicks',
            bird_count: 15,
            type: 'In',
            ammount: 150,
            payment_status: 'Paid',
            date: '2024-08-14',
            description: 'Sold young chicks to another farm',
        },
        {
            key: '7',
            purpose: 'Cleaning services',
            bird_count: 0,
            type: 'Out',
            ammount: 70,
            payment_status: 'Paid',
            date: '2024-08-13',
            description: 'Paid for cleaning services of bird cages',
        },
        {
            key: '8',
            purpose: 'Sold manure',
            bird_count: 0,
            type: 'In',
            ammount: 80,
            payment_status: 'Pending',
            date: '2024-08-12',
            description: 'Sold bird manure as fertilizer',
        },
        {
            key: '9',
            purpose: 'Purchase new birds',
            bird_count: 25,
            type: 'Out',
            ammount: 500,
            payment_status: 'Paid',
            date: '2024-08-11',
            description: 'Purchased new birds for breeding',
        },
        {
            key: '10',
            purpose: 'Sold bird feed',
            bird_count: 0,
            type: 'In',
            ammount: 120,
            payment_status: 'Paid',
            date: '2024-08-10',
            description: 'Sold excess bird feed to neighboring farm',
        },
        {
            key: '11',
            purpose: 'Repair cages',
            bird_count: 0,
            type: 'Out',
            ammount: 60,
            payment_status: 'Pending',
            date: '2024-08-09',
            description: 'Paid for repairs to bird cages',
        },
        {
            key: '12',
            purpose: 'Sold feathers',
            bird_count: 0,
            type: 'In',
            ammount: 40,
            payment_status: 'Pending',
            date: '2024-08-08',
            description: 'Sold feathers collected during cleaning',
        },
    ];



    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'All',
            children: <Table dataSource={dataSource} columns={columns} />,
        },
        {
            key: '2',
            label: 'Income',
            children: <Table dataSource={dataSource.filter((ele: any) => ele?.type === 'In')} columns={columns} />,
        },
        {
            key: '3',
            label: 'Expense',
            children: <Table dataSource={dataSource.filter((ele: any) => ele?.type !== 'In')} columns={columns} />,
        },
    ];
    const onChange = (key: string) => {
        console.log(key);
    };

    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => {
                    setIsModalOpen(true)
                    setModalTitle('New Income')
                    setType('income')
                }}>Income</Button>
                <Button type="primary" onClick={() => {
                    setIsModalOpen(true)
                    setModalTitle('New Expense')
                    setType('expense')
                }}>Expense</Button>
            </Space>
        </>}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            {isModalOpen && <Modal
                open={isModalOpen}
                title={modalTitle}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                onCancel={() => {
                    setIsModalOpen(false)
                }}
            >
                <CustomForm name="incomeExpense" data={incomeExpenseFormItems(type)} onFinish={onFinish} />
            </Modal>}
        </Card>
    </>
}

export default IncomeExpense;