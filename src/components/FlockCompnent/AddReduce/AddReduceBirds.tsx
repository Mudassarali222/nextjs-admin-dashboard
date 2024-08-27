"use client"

import CustomForm from "@/components/CustomForm/CustomForm";
import { addreduceFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Dropdown, Form, Input, MenuProps, Modal, Select, Space, Table, Tabs, TabsProps, Tag } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const { Option } = Select;


const AddReduceBirds = ({ flockId }: any) => {
    console.log('Line 12:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Birds');
    const [type, setType] = useState<string>('add');

    const columns = [
        {
            title: 'Acqusition',
            dataIndex: 'acqusition',
            key: 'Acqusition',
        },
        {
            title: 'Birds Count',
            dataIndex: 'active_bird_count',
            key: 'Birds Count',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'Type',
            render: (record: any) => {
                return record === 'Addition' ? <Tag color="success">{record}</Tag> : <Tag color="error">{record}</Tag>;
            }
        },
        {
            title: 'Created Date',
            dataIndex: 'date',
            key: 'Created Date',
        },
        {
            title: 'Description',
            dataIndex: 'date',
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
            f_Name: 'Flock A',
            type: 'Addition',
            active_bird_count: 150,
            purpose: 'Egg Production',
            acqusition: 'Purchased',
            date: '2024-08-17',
        },
        {
            key: '2',
            f_Name: 'Flock B',
            type: 'Reduction',
            active_bird_count: 200,
            purpose: 'Meat Production',
            acqusition: 'Bred',
            date: '2024-08-10',
        },
        {
            key: '3',
            f_Name: 'Flock C',
            type: 'Reduction',
            active_bird_count: 80,
            purpose: 'Breeding',
            acqusition: 'Purchased',
            date: '2024-08-05',
        },
        {
            key: '4',
            f_Name: 'Flock D',
            type: 'Addition',
            active_bird_count: 300,
            purpose: 'Egg Production',
            acqusition: 'Bred',
            date: '2024-07-28',
        },
        {
            key: '5',
            f_Name: 'Flock E',
            type: 'Reduction',
            active_bird_count: 120,
            purpose: 'Feather Production',
            acqusition: 'Purchased',
            date: '2024-07-20',
        },
        {
            key: '6',
            f_Name: 'Flock F',
            type: 'Addition',
            active_bird_count: 250,
            purpose: 'Meat Production',
            acqusition: 'Bred',
            date: '2024-07-15',
        },
        {
            key: '7',
            f_Name: 'Flock G',
            type: 'Addition',
            active_bird_count: 180,
            purpose: 'Egg Production',
            acqusition: 'Purchased',
            date: '2024-07-10',
        },
        {
            key: '8',
            f_Name: 'Flock H',
            type: 'Addition',
            active_bird_count: 90,
            purpose: 'Breeding',
            acqusition: 'Bred',
            date: '2024-07-05',
        },
        {
            key: '9',
            f_Name: 'Flock I',
            type: 'Reduction',
            active_bird_count: 220,
            purpose: 'Meat Production',
            acqusition: 'Purchased',
            date: '2024-06-30',
        },
        {
            key: '10',
            f_Name: 'Flock J',
            type: 'Reduction',
            active_bird_count: 100,
            purpose: 'Feather Production',
            acqusition: 'Bred',
            date: '2024-06-25',
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
            label: 'Addition',
            children: <Table dataSource={dataSource.filter((ele: any) => ele?.type === 'Addition')} columns={columns} />,
        },
        {
            key: '3',
            label: 'Reduction',
            children: <Table dataSource={dataSource.filter((ele: any) => ele?.type !== 'Addition')} columns={columns} />,
        },
    ];
    const onChange = (key: string) => {
        console.log('Line 177:', key);
    };

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('add'); setModalTitle('Add Birds') }}>Add Birds</Button>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('reduction'); setModalTitle('Reduce Birds') }}>Reduce Birds</Button>
            </Space>
        </>}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Card>
        {isModalOpen && <Modal
            open={isModalOpen}
            title={modalTitle}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
            onCancel={() => {
                setIsModalOpen(false)
            }}
        >

            <div>
                <CustomForm name="addReduce" onFinish={onFinish} data={addreduceFormItems(type)} />
            </div>
        </Modal>}
    </>
}

export default AddReduceBirds;