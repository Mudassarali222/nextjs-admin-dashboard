"use client"
import { addFeedsData, getFeedsData } from "@/axios/services/feed";
import CustomForm from "@/components/CustomForm/CustomForm";
import { feedingFormItems } from "@/utils/constant";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, message, Modal, Space, Table, } from "antd";
import { useEffect, useState } from "react";



const Feeding = ({ flockId }: any) => {
    console.log('Line 10:', flockId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [FeedData, setFeedData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);


    async function getFeed() {
        await getFeedsData(flockId).then((res: any) => {
            setIsLoading(false)
            setFeedData(res?.data)
        }).catch((err: any) => {
            setIsLoading(false)
        });
    }

    async function addFeed(payload: any) {
        await addFeedsData(payload).then((res) => {
            if (res?.status === 201) {
                message.success('Feed save successfully.')
                setIsModalOpen(false)
                setIsLoading(false)
                const { data } = res
                setFeedData([data, ...FeedData])
            }
        }).catch(() => {
            message.error('Feed not save successfully.')
        });
    }

    const handleSubmit = (values: any) => {
        setIsLoading(true)
        const body = {
            ...values,
            flock_id: flockId
        }

        addFeed(body)
    };


    const columns = [
        {
            title: 'Feed Type',
            dataIndex: 'feed_name',
            key: 'Feed Type',
        },
        {
            title: 'Feed Quantity(kg)',
            dataIndex: 'quantity',
            key: 'Feed Quantity(kg)',
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



    useEffect(() => {
        if (!FeedData) {
            setIsLoading(true)
            getFeed();
        }


    }, []);

    return <>
        <Card title={'Chicken One'} extra={<>
            <Space>
                <Button type="primary" onClick={() => {
                    setIsModalOpen(true)
                }}>New Feeding</Button>
            </Space>
        </>}>
            <Table dataSource={FeedData} loading={isLoading} columns={columns} />
            {isModalOpen && <Modal
                open={isModalOpen}
                title={'New Feeding'}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                onCancel={() => {
                    setIsModalOpen(false)
                }}
            >
                <CustomForm name="feeding" isLoading={isLoading} data={feedingFormItems} onFinish={handleSubmit} />
            </Modal>}
        </Card>
    </>
}

export default Feeding;