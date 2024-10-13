"use client"
import { addEggsData, getEggsData } from "@/axios/services/Egg";
import CustomForm from "@/components/CustomForm/CustomForm";
import { eggcollectionFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, message, Modal, Space, Spin, Table, Tabs, TabsProps, Tag } from "antd";
import { useEffect, useState } from "react";

const EggCollection = ({ flockId }: any) => {
    console.log('Line 11:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Eggs');
    const [type, setType] = useState<string>('Collect');
    const [eggsData, setEggsData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);


    async function getEggs() {
       await getEggsData(flockId).then((res: any) => {
            setIsLoading(false)
            setEggsData(res?.data)
        }).catch((err: any) => {
            setIsLoading(false)
        });
    }

    async function addEggs(payload: any) {
         await addEggsData(payload).then((res) => {
            if (res?.status === 201) {
                type === 'Collect' ? message.success('Eggs collection save successfully.') : message.success('Eggs Reduction save successfully.')
                setIsModalOpen(false)
                setIsLoading(false)
                const { data } = res
                setEggsData([data, ...eggsData])
            }
        }).catch(() => {
            message.error('Data not save successfully.')
        });
    }

    const columns = [
        {
            title: 'Good Eggs',
            dataIndex: 'good_eggs',
            key: 'Good Eggs',
        },
        {
            title: 'Bad Eggs',
            dataIndex: 'spoil_eggs',
            key: 'Birds Count',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'Type',
            render: (record: any) => {
                return record === 'Collect' ? <Tag color="success">{record}</Tag> : <Tag color="error">{record}</Tag>;
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
            dataIndex: 'collection_date',
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
    //         type: 'Collected',
    //         good_eggs: 5,
    //         bad_eggs: 5,
    //         total_eggs: 10,
    //         des: '',
    //         date: '2024-08-17',
    //     },
    //     {
    //         key: '2',
    //         type: 'Reduced',
    //         good_eggs: 5,
    //         bad_eggs: 5,
    //         total_eggs: 10,
    //         des: '',
    //         reduction_reason: "Sold",
    //         date: '2024-08-10',
    //     },
    //     {
    //         key: '3',
    //         type: 'Collected',
    //         good_eggs: 5,
    //         bad_eggs: 10,
    //         total_eggs: 15,
    //         des: '',
    //         date: '2024-08-05',
    //     },
    //     {
    //         key: '4',
    //         type: 'Reduced',
    //         good_eggs: 15,
    //         bad_eggs: 10,
    //         total_eggs: 25,
    //         des: '',
    //         reduction_reason: "Lose/Stolen",
    //         date: '2024-07-28',
    //     },
    //     {
    //         key: '5',
    //         type: 'Reduced',
    //         good_eggs: 2,
    //         bad_eggs: 1,
    //         total_eggs: 3,
    //         des: '',
    //         reduction_reason: "Other",
    //         date: '2024-07-20',
    //     },
    //     {
    //         key: '6',
    //         type: 'Collected',
    //         good_eggs: 25,
    //         bad_eggs: 0,
    //         total_eggs: 25,
    //         des: '',
    //         date: '2024-07-15',
    //     },
    //     {
    //         key: '7',
    //         type: 'Reduced',
    //         good_eggs: 2,
    //         bad_eggs: 1,
    //         total_eggs: 3,
    //         des: '',
    //         reduction_reason: "Other",
    //         date: '2024-07-10',
    //     },
    //     {
    //         key: '8',
    //         type: 'Reduced',
    //         good_eggs: 50,
    //         bad_eggs: 10,
    //         total_eggs: 60,
    //         des: '',
    //         reduction_reason: "Lose/Stolen",
    //         date: '2024-07-05',
    //     },
    //     {
    //         key: '9',
    //         type: 'Collected',
    //         good_eggs: 25,
    //         bad_eggs: 1,
    //         total_eggs: 26,
    //         des: '',
    //         date: '2024-06-30',
    //     },
    //     {
    //         key: '10',
    //         type: 'Collected',
    //         good_eggs: 30,
    //         bad_eggs: 5,
    //         total_eggs: 35,
    //         des: '',
    //         date: '2024-06-25',
    //     },
    // ];


    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'All',
            children: <Table dataSource={eggsData || []} columns={columns} />,
        },
        {
            key: '2',
            label: 'Collection',
            children: <Table dataSource={eggsData?.filter((ele: any) => ele?.type !== 'Reduced')} columns={columns.filter((ele: any) => ele.dataIndex !== 'reduction_reason')} />,
        },
        {
            key: '3',
            label: 'Reduction',
            children: <Table dataSource={eggsData?.filter((ele: any) => ele?.type === 'Reduced')} columns={columns} />,
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

        addEggs(body)
    };

    useEffect(() => {
        if (!eggsData) {
            setIsLoading(true)
            getEggs();
        }


    }, []);

    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('Collect'); setModalTitle('Add Eggs') }}>Collect</Button>
                <Button type="primary" onClick={() => { setIsModalOpen(true); setType('Reduced'); setModalTitle('Reduce Eggs') }}>Reduce</Button>
            </Space>
        </>}>
            {!isLoading ? <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> : <div className="flex items-center justify-center"><Spin /></div>}
            {isModalOpen && <Modal
                open={isModalOpen}
                title={modalTitle}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                onCancel={() => {
                    setIsModalOpen(false)
                }}
            >
                <CustomForm name="eggcollection" isLoading={isLoading} data={eggcollectionFormItems(type)} onFinish={onFinish} />
            </Modal>}
        </Card>
    </>
}

export default EggCollection;