"use client"
import CustomForm from "@/components/CustomForm/CustomForm";
import { feedingFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Input, InputNumber, Modal, Select, Space, Table, Tabs, TabsProps, Tag } from "antd";
import { useParams } from "next/navigation";
import { useState } from "react";



const Feeding = ({ flockId }: any) => {
    console.log('Line 10:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('New Feeding');


    const [form] = Form.useForm();


    const { Option } = Select;

    const handleSubmit = (values: any) => {
        console.log('Form values:', values);
    };


    const columns = [
        {
            title: 'Feed Type',
            dataIndex: 'feed_type',
            key: 'Feed Type',
        },
        {
            title: 'Feed Quantity(kg)',
            dataIndex: 'feed_quantity',
            key: 'Feed Quantity(kg)',
        },

        {
            title: 'Created Date',
            dataIndex: 'date',
            key: 'Created Date',
        },
        {
            title: 'Description',
            dataIndex: 'des',
            key: 'Description',
        },
        {
            title: 'Actions',
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
            feed_type: 'Oats',
            feed_quantity: 5,
            des: '',
            date: '2024-08-17',
        },
        {
            key: '2',
            feed_type: 'Corn',
            feed_quantity: 10,
            des: '',
            date: '2024-08-10',
        },
        {
            key: '3',
            feed_type: 'Chick and Duck Mash',
            feed_quantity: 2,
            des: '',
            date: '2024-08-05',
        },
        {
            key: '4',
            feed_type: 'Bajra/Millat',
            feed_quantity: 25,
            des: '',
            date: '2024-07-28',
        },
        {
            key: '5',
            feed_type: 'Oats',
            feed_quantity: 14,
            des: '',
            date: '2024-07-20',
        },
        {
            key: '6',
            feed_type: 'Barley',
            feed_quantity: 50,
            des: '',
            date: '2024-07-15',
        },
        {
            key: '7',
            feed_type: 'Mix Seeds',
            feed_quantity: 500,
            des: '',
            date: '2024-07-10',
        },
        {
            key: '8',
            feed_type: 'Oats',
            feed_quantity: 35,
            des: '',
            date: '2024-07-05',
        },
        {
            key: '9',
            feed_type: 'Chicken Scratch',
            feed_quantity: 33,
            des: '',
            date: '2024-06-30',
        },
        {
            key: '10',
            feed_type: 'Layers Mash',
            feed_quantity: 22,
            des: '',
            date: '2024-06-25',
        },
    ];

    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => {
                    setIsModalOpen(true)
                }}>New Feeding</Button>
            </Space>
        </>}>
            <Table dataSource={dataSource} columns={columns} />
            {isModalOpen && <Modal
                open={isModalOpen}
                title={modalTitle}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                onCancel={() => {
                    setIsModalOpen(false)
                }}
            >
                <CustomForm name="feeding" data={feedingFormItems} onFinish={handleSubmit} />
            </Modal>}
        </Card>
    </>
}

export default Feeding;