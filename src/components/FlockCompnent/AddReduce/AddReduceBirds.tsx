"use client"

import { addBirdData, getBirdsData } from "@/axios/services/bird";
import CustomForm from "@/components/CustomForm/CustomForm";
import { addreduceFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Dropdown, Form, Input, MenuProps, message, Modal, Select, Space, Spin, Table, Tabs, TabsProps, Tag } from "antd";
import { useEffect, useState } from "react";

const { TextArea } = Input;
const { Option } = Select;


const AddReduceBirds = ({ flockId }: any) => {
    console.log('Line 12:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Birds');
    const [type, setType] = useState<string>('Addition');
    const [birdData, setBirdData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function getAllBird() {
        await getBirdsData(flockId).then((res: any) => {
            setIsLoading(false)
            setBirdData(res?.data)
        }).catch((err:any)=>{
            setIsLoading(false)
        });
    }

    async function addBird(payload: any) {
         await addBirdData(payload).then((res) => {
            if (res?.status === 201) {
              type==='Addition' ?  message.success('Bird added successfully.') : message.success('Bird reduce successfully.')
                setIsModalOpen(false)
                setIsLoading(false)
                const { data } = res
                setBirdData([data, ...birdData])
            }
        }).catch(()=>{
            message.error('Data not save successfully.')
        });
    }

    const columns = [
        {
            title: 'Acqusition',
            // dataIndex: 'acqusition',
            key: 'Acqusition',
            render: (record: any) => {
                return record?.type === 'Addition' ? 'Purchased' : 'Bred'

            }
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
                return record === 'Addition' ? <Tag color="success">{record}</Tag> : <Tag color="error">{record}</Tag>;
            }
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


    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'All',
            children: <Table dataSource={birdData} columns={columns} />,
        },
        {
            key: '2',
            label: 'Addition',
            children: <Table dataSource={birdData?.filter((ele: any) => ele?.type === 'Addition')} columns={columns} />,
        },
        {
            key: '3',
            label: 'Reduction',
            children: <Table dataSource={birdData?.filter((ele: any) => ele?.type !== 'Addition')} columns={columns} />,
        },
    ];
    const onChange = (key: string) => {
        console.log('Line 177:', key);
    };

    const onFinish = (values: any) => {
        setIsLoading(true)
        const body = {
            ...values,
            type,
            flock_id: flockId
        }

        addBird(body)
    };

    useEffect(() => {
        if (!birdData) {
            setIsLoading(true)
            getAllBird();
        }

    }, []);

    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('Addition'); setModalTitle('Add Birds') }}>Add Birds</Button>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('Reduction'); setModalTitle('Reduce Birds') }}>Reduce Birds</Button>
            </Space>
        </>}>
           {!isLoading ? <Tabs defaultActiveKey="1" items={items} onChange={onChange} />: <div className="flex items-center justify-center"><Spin/></div>}
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
                <CustomForm isLoading={isLoading} name="addReduce" onFinish={onFinish} data={addreduceFormItems(type)} />
            </div>
        </Modal>}
    </>
}

export default AddReduceBirds;