"use client"

import { addHealthData, getHealthData } from "@/axios/services/health";
import CustomForm from "@/components/CustomForm/CustomForm";
import { healthFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Dropdown, Form, Input, InputNumber, MenuProps, message, Modal, Select, Space, Table, Tabs, TabsProps, Tag } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const Health = ({ flockId }: any) => {
    console.log('Line 11:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Birds');
    const [type, setType] = useState<string>('');
    const [healthData, setHealthData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function getHealthRecords() {
        await getHealthData(flockId).then((res: any) => {
            setIsLoading(false)
            setHealthData(res?.data)
        }).catch((err: any) => {
            setIsLoading(false)
        });
    }

    async function addHealth(payload: any) {
        await addHealthData(payload).then((res) => {
            if (res?.status === 201) {
                message.success(`${type} save successfully.`)
                setIsModalOpen(false)
                setIsLoading(false)
                const { data } = res
                setHealthData([data, ...healthData])
            }
        }).catch(() => {
            message.error(`${type} not save successfully.`)
        });
    }

    const columns = [
        {
            title: 'Disease',
            dataIndex: 'disease_name',
            key: 'Disease',
        },
        {
            title: 'Medicince',
            dataIndex: 'medicine_name',
            key: 'Medicine',
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
                return record === 'Vaccination' ? <Tag color="success">Vaccination</Tag> : <Tag color="magenta">Medication</Tag>;
            }
        },
        {
            title: 'Doctor Name',
            dataIndex: 'doctor_name',
            key: 'Doctor Name',
        },
        {
            title: 'Created Date',
            dataIndex: 'created_date',
            key: 'Created Date',
        },
        {
            title: 'Description',
            dataIndex: 'notes',
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

    // const dataSource = [
    //     {
    //         key: '1',
    //         disease: 'Newcastle Disease',
    //         type: 'vac',
    //         bird_count: 150,
    //         doctor_name: 'Dr. John Doe',
    //         des: '',
    //         date: '2024-08-17',
    //     },
    //     {
    //         key: '2',
    //         disease: 'Infectious Bronchitis',
    //         type: 'med',
    //         bird_count: 200,
    //         doctor_name: 'Dr. Jane Smith',
    //         des: '',
    //         date: '2024-08-10',
    //     },
    //     {
    //         key: '3',
    //         disease: 'Avian Influenza',
    //         type: 'med',
    //         bird_count: 80,
    //         doctor_name: 'Dr. Alan Brown',
    //         des: '',
    //         date: '2024-08-05',
    //     },
    //     {
    //         key: '4',
    //         disease: 'Marek’s Disease',
    //         type: 'vac',
    //         bird_count: 300,
    //         doctor_name: 'Dr. Emily Davis',
    //         des: '',
    //         date: '2024-07-28',
    //     },
    //     {
    //         key: '5',
    //         disease: 'Fowl Pox',
    //         type: 'med',
    //         bird_count: 120,
    //         doctor_name: 'Dr. Michael Lee',
    //         des: '',
    //         date: '2024-07-20',
    //     },
    //     {
    //         key: '6',
    //         disease: 'Coccidiosis',
    //         type: 'vac',
    //         bird_count: 250,
    //         doctor_name: 'Dr. Sarah Wilson',
    //         des: '',
    //         date: '2024-07-15',
    //     },
    //     {
    //         key: '7',
    //         disease: 'Infectious Bursal Disease',
    //         type: 'vac',
    //         bird_count: 180,
    //         doctor_name: 'Dr. Robert Clark',
    //         des: '',
    //         date: '2024-07-10',
    //     },
    //     {
    //         key: '8',
    //         disease: 'Fowl Cholera',
    //         type: 'vac',
    //         bird_count: 90,
    //         doctor_name: 'Dr. Lisa Johnson',
    //         des: '',
    //         date: '2024-07-05',
    //     },
    //     {
    //         key: '9',
    //         disease: 'Salmonellosis',
    //         type: 'med',
    //         bird_count: 220,
    //         doctor_name: 'Dr. David Miller',
    //         des: '',
    //         date: '2024-06-30',
    //     },
    //     {
    //         key: '10',
    //         disease: 'Avian Encephalomyelitis',
    //         type: 'med',
    //         bird_count: 100,
    //         doctor_name: 'Dr. Jessica Taylor',
    //         des: '',
    //         date: '2024-06-25',
    //     },
    // ];

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'All',
            children: <Table dataSource={healthData || []} columns={columns} />,
        },
        {
            key: '2',
            label: 'Vaccination',
            children: <Table dataSource={healthData?.filter((ele: any) => ele?.type === 'Vaccination')} columns={columns} />,
        },
        {
            key: '3',
            label: 'Medication',
            children: <Table dataSource={healthData?.filter((ele: any) => ele?.type !== 'Vaccination')} columns={columns} />,
        },
    ];

    const onChange = (key: string) => {
        console.log(key);
    };

    const onFinish = (values: any) => {
        setIsLoading(true)
        const body = {
            ...values,
            type,
            flock_id: flockId
        }

        addHealth(body)
    };

    useEffect(() => {
        if (!healthData) {
            setIsLoading(true)
            getHealthRecords()
        }
    }, []);


    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => {
                    setIsModalOpen(true)
                    setModalTitle('New Vaccination')
                    setType('Vaccination')
                }}>Vaccination</Button>
                <Button type="primary" onClick={() => {
                    setIsModalOpen(true)
                    setModalTitle('New Medication')
                    setType('Medication')
                }}>Medication</Button>
            </Space>
        </>}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            <Modal
                open={isModalOpen}
                title={modalTitle}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                onCancel={() => {
                    setIsModalOpen(false)
                }}
            >
                <CustomForm name="health" isLoading={isLoading} data={healthFormItems} onFinish={onFinish} />
            </Modal>
        </Card>
    </>
}

export default Health;