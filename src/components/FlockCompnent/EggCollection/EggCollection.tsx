"use client"
import CustomForm from "@/components/CustomForm/CustomForm";
import { eggcollectionFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Input, InputNumber, Modal, Select, Space, Table, Tabs, TabsProps, Tag } from "antd";
import { useParams } from "next/navigation";
import { useState } from "react";

const { TextArea } = Input;
const { Option } = Select;

const EggCollection = ({ flockId }: any) => {
    console.log('Line 11:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Birds');
    const [type, setType] = useState<string>('collect');

    const columns = [
        {
            title: 'Good Eggs',
            dataIndex: 'good_eggs',
            key: 'Good Eggs',
        },
        {
            title: 'Bad Eggs',
            dataIndex: 'bad_eggs',
            key: 'Birds Count',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'Type',
            render: (record: any) => {
                return record === 'Collected' ? <Tag color="success">{record}</Tag> : <Tag color="error">{record}</Tag>;
            }
        },
        {
            title: 'Total Eggs',
            dataIndex: 'total_eggs',
            key: 'Total Eggs',
        },
        {
            title: 'Reduction Reason',
            dataIndex: 'reduction_reason',
            key: 'Reduction Reason',
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
            type: 'Collected',
            good_eggs: 5,
            bad_eggs: 5,
            total_eggs: 10,
            des: '',
            date: '2024-08-17',
        },
        {
            key: '2',
            type: 'Reduced',
            good_eggs: 5,
            bad_eggs: 5,
            total_eggs: 10,
            des: '',
            reduction_reason: "Sold",
            date: '2024-08-10',
        },
        {
            key: '3',
            type: 'Collected',
            good_eggs: 5,
            bad_eggs: 10,
            total_eggs: 15,
            des: '',
            date: '2024-08-05',
        },
        {
            key: '4',
            type: 'Reduced',
            good_eggs: 15,
            bad_eggs: 10,
            total_eggs: 25,
            des: '',
            reduction_reason: "Lose/Stolen",
            date: '2024-07-28',
        },
        {
            key: '5',
            type: 'Reduced',
            good_eggs: 2,
            bad_eggs: 1,
            total_eggs: 3,
            des: '',
            reduction_reason: "Other",
            date: '2024-07-20',
        },
        {
            key: '6',
            type: 'Collected',
            good_eggs: 25,
            bad_eggs: 0,
            total_eggs: 25,
            des: '',
            date: '2024-07-15',
        },
        {
            key: '7',
            type: 'Reduced',
            good_eggs: 2,
            bad_eggs: 1,
            total_eggs: 3,
            des: '',
            reduction_reason: "Other",
            date: '2024-07-10',
        },
        {
            key: '8',
            type: 'Reduced',
            good_eggs: 50,
            bad_eggs: 10,
            total_eggs: 60,
            des: '',
            reduction_reason: "Lose/Stolen",
            date: '2024-07-05',
        },
        {
            key: '9',
            type: 'Collected',
            good_eggs: 25,
            bad_eggs: 1,
            total_eggs: 26,
            des: '',
            date: '2024-06-30',
        },
        {
            key: '10',
            type: 'Collected',
            good_eggs: 30,
            bad_eggs: 5,
            total_eggs: 35,
            des: '',
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
            label: 'Collection',
            children: <Table dataSource={dataSource.filter((ele: any) => ele?.type !== 'Reduced')} columns={columns.filter((ele: any) => ele.dataIndex !== 'reduction_reason')} />,
        },
        {
            key: '3',
            label: 'Reduction',
            children: <Table dataSource={dataSource.filter((ele: any) => ele?.type === 'Reduced')} columns={columns} />,
        },
    ];
    const onChange = (key: string) => {
        console.log(key);
    };

    const onFinish = (values: any) => {
        console.log('Form Values:', values);
    };

    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('collect'); setModalTitle('Add Eggs') }}>Collect</Button>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('reduction'); setModalTitle('Reduce Eggs') }}>Reduce</Button>
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
                <CustomForm name="eggcollection" data={eggcollectionFormItems(type)} onFinish={onFinish} />
            </Modal>}
        </Card>
    </>
}

export default EggCollection;