"use client"
import { addflock, getFlock } from "@/axios/services/flock";
import { getAllUser } from "@/axios/services/user";
import { flockOptions } from "@/utils/constant";
import { DeleteOutlined, DownOutlined, EditOutlined, EllipsisOutlined, InboxOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, DatePicker, Dropdown, Form, Input, MenuProps, message, Modal, Select, Space, Table, Upload } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const { Option } = Select;
const { TextArea } = Input;

const Flock = () => {

    const [isModalOpen, setisModalOpen] = useState<boolean>(false);
    const [form] = Form.useForm();
    const router = useRouter();
    const submitRef = useRef<any>();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Flock');

    const [flocks, setflocks] = useState<any>();

    async function getAllFlocks() {
        const user: any = await getFlock().then((res) => { console.log('Line 24:', res); setflocks(res?.data) });
    }

    async function addFlock(payload: any) {
        const user: any = await addflock(payload).then((res) => {
            if (res?.status === 201) {
                setisModalOpen(false)
                const { data } = res
                setflocks([data, ...flocks])
            }
        });
    }


    useEffect(() => {
        getAllFlocks();
    }, []);

    const handleMenuClick = (e: any,record:any) => {
        console.log('Line 43:', e,record);
        // message.info(`Clicked on item with key ${e.key}`);
        // You can use e.key to determine which item was clicked
        switch (e.key) {
            case '0':
                router.push(`flock/details/${record?._id}?type=${flockOptions[0].value}`)
                break;
            case '1':
                router.push(`flock/details/${record?._id}?type=${flockOptions[1].value}`)
                break;
            case '2':
                router.push(`flock/details/${record?._id}?type=${flockOptions[2].value}`)
                break;
            case '3':
                router.push(`flock/details/${record?._id}?type=${flockOptions[3].value}`)
                break;
            case '4':
                router.push(`flock/details/${record?._id}?type=${flockOptions[4].value}`)
                break;
            // case '5':
            //     setModalTitle('Edit Flock')
            //     setisModalOpen(true)
            //     setIsEdit(true)
            //     break;
            // case '6':
            //     console.log('Third item clicked');
            //     break;
            default:
                console.log('Unknown item clicked');
        }
    };

    const items: MenuProps['items'] = [
        {
            label: 'Add/Reduce Birds',
            key: '0',
        },
        {
            label: 'Egg Collection',
            key: '1',
        },
        {
            label: 'Daily Feeding',
            key: '2',
        },
        {
            label: 'Birds Health',
            key: '3',
        },
        {
            label: 'Income/Expense',
            key: '4',
        },
        // {
        //     label: "Edit",
        //     key: '5',
        // },
        // {
        //     label: <span className="text-red-500">Delete</span>,
        //     key: '6',
        // },
    ];
    const columns = [
        {
            title: 'Flock Name',
            dataIndex: 'f_name',
            key: 'Flock Name',
        },
        {
            title: 'Type',
            dataIndex: 'bird_type',
            key: 'Type',
        },
        {
            title: 'Birds Count',
            dataIndex: 'bird_count',
            key: 'Birds Count',
        },
        {
            title: 'Purpose',
            dataIndex: 'purpose',
            key: 'Purpose',
        },
        {
            title: 'Acqusition',
            dataIndex: 'acquisition_type',
            key: 'Acqusition',
        },
        {
            title: 'Created Date',
            dataIndex: 'acquisition_date',
            key: 'Created Date',
        },
        {
            title: 'Actions',
            //   dataIndex: 'action',
            key: 'Actions',

            render: (record: any) => {
                return <>
                    <Space>
                        <EditOutlined onClick={() => {
                            setModalTitle('Edit Flock')
                            setisModalOpen(true)
                            setIsEdit(true)
                        }}
                            className="text-blue-500"
                        />
                        <DeleteOutlined className="text-red-500" onClick={() => { }} />
                        <Dropdown menu={{
                            items,
                            onClick: (e)=> handleMenuClick(e,record),
                        }} trigger={['click']}
                            className="cursor-pointer"
                            placement="bottom" arrow>
                            <Space className="flex justify-center">
                                <EllipsisOutlined className="border-solid border-2 p-1 rounded-md" />
                            </Space>
                        </Dropdown>
                    </Space>
                </>
            }
        },

    ];

    function normFile(e: any) {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    }

    const onFinish = (values: any) => {
        console.log('Form Values:', values);
        addFlock(values)
    };

    return <>
        <Space className="flex justify-end mb-3"><Button type="primary" onClick={() => { setisModalOpen(true); setIsEdit(false) }}>Add Flock</Button></Space>
        {flocks && <Table dataSource={flocks} columns={columns} />}
        <Modal
            open={isModalOpen}
            title={modalTitle}
            onOk={() => {
                setisModalOpen(false)
            }}
            onCancel={() => {
                setisModalOpen(false)
                setModalTitle('Add Flock')
            }}
            footer={[
                <Button key="submit" type="primary" onClick={() => submitRef.current.click()}>
                    Submit
                </Button>,
                <Button
                    key="link"
                    type="primary"
                >
                    Cancel
                </Button>,
            ]}
        >

            <div>
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                >

                    <Form.Item
                        name="f_name"
                        label="Flock/Batch Name"
                        rules={[{ required: true, message: 'Please enter the flock or batch name!' }]}
                    >
                        <Input placeholder="Enter flock or batch name" />
                    </Form.Item>
                    <Form.Item
                        name="bird_type"
                        label="Bird Type"
                        rules={[{ required: true, message: 'Please select a bird type!' }]}
                    >
                        <Select placeholder="Select a bird type" disabled={isEdit}>
                            <Option value="Chicken">Chicken</Option>
                            <Option value="Duck">Duck</Option>
                            <Option value="Turkey">Turkey</Option>
                            <Option value="Peacock">Peacock</Option>
                            <Option value="Bob White Quail">Bob White Quail</Option>
                            <Option value="Goose">Goose</Option>
                            <Option value="Gulinea">Gulinea</Option>
                            <Option value="Pheasant">Pheasant</Option>
                            <Option value="Pigeon">Pigeon</Option>
                            <Option value="Canary">Canary</Option>
                            <Option value="Finch">Finch</Option>
                            <Option value="Ostrich">Ostrich</Option>
                            <Option value="Rhea">Rhea</Option>
                            <Option value="Emu">Emu</Option>
                            <Option value="Coturnix">Coturnix</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="bird_count"
                        label="Number of Birds"
                        rules={[{ required: true, message: 'Please enter the number of birds!' }]}
                    >
                        <Input type="number" placeholder="Enter number of birds" disabled={isEdit} />
                    </Form.Item>

                    <Form.Item
                        name="purpose"
                        label="Purpose"
                        rules={[{ required: true, message: 'Please select the purpose!' }]}
                    >
                        <Select placeholder="Select a purpose" disabled={isEdit}>
                            <Option value="Egg">Egg</Option>
                            <Option value="Meat">Meat</Option>
                            <Option value="Egg and Meat">Egg and Meat</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="acquisition_type"
                        label="Acquisition"
                        rules={[{ required: true, message: 'Please select the acquisition method!' }]}
                    >
                        <Select placeholder="Select acquisition method" disabled={isEdit}>
                            <Option value="Purchased">Purchased</Option>
                            <Option value="Hatched on Farm">Hatched on Farm</Option>
                            <Option value="Gift">Gift</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="acquisition_date"
                        label="Date"
                        rules={[{ required: true, message: 'Please select the date!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} disabled={isEdit} />
                    </Form.Item>

                    <Form.Item
                        name="icon"
                        label="Flock Image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload.Dragger name="files" listType="picture" disabled={isEdit}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger>
                    </Form.Item>

                    <Form.Item
                        name="notes"
                        label="Flock Description"
                    >
                        <TextArea rows={4} placeholder="Enter a description for the flock" disabled={isEdit} />
                    </Form.Item>

                    <Form.Item>
                        <Button ref={submitRef} type="primary" hidden htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    </>
}

export default Flock;