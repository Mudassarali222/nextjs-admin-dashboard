"use client"
import { flockOptions } from "@/utils/constant";
import { DeleteOutlined, DownOutlined, EditOutlined, EllipsisOutlined, InboxOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, DatePicker, Dropdown, Form, Input, MenuProps, message, Modal, Select, Space, Table, Upload } from "antd";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
const { Option } = Select;
const { TextArea } = Input;

const Flock = () => {

    const [isModalOpen, setisModalOpen] = useState<boolean>(false);
    const [form] = Form.useForm();
    const router = useRouter();
    const submitRef = useRef<any>();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('Add Flock');
    const handleMenuClick = (e: any) => {
        // message.info(`Clicked on item with key ${e.key}`);
        // You can use e.key to determine which item was clicked
        switch (e.key) {
            case '0':
                router.push(`flock/details/1?type=${flockOptions[0].value}`)
                break;
            case '1':
                router.push(`flock/details/1?type=${flockOptions[1].value}`)
                break;
            case '2':
                router.push(`flock/details/1?type=${flockOptions[2].value}`)
                break;
            case '3':
                router.push(`flock/details/1?type=${flockOptions[3].value}`)
                break;
            case '4':
                router.push(`flock/details/1?type=${flockOptions[4].value}`)
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
            dataIndex: 'f_Name',
            key: 'Flock Name',
        },
        {
            title: 'Type',
            dataIndex: 'icon',
            key: 'Type',
        },
        {
            title: 'Birds Count',
            dataIndex: 'active_bird_count',
            key: 'Birds Count',
        },
        {
            title: 'Purpose',
            dataIndex: 'purpose',
            key: 'Purpose',
        },
        {
            title: 'Acqusition',
            dataIndex: 'acqusition',
            key: 'Acqusition',
        },
        {
            title: 'Created Date',
            dataIndex: 'date',
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
                            onClick: handleMenuClick,
                        }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className="flex justify-center">
                                    <EllipsisOutlined className="border-solid border-2 p-1 rounded-md" />
                                </Space>
                            </a>
                        </Dropdown>
                    </Space>
                </>
            }
        },

    ];
    const dataSource = [
        {
            key: '1',
            f_Name: 'Flock A',
            icon: 'Chicken',
            active_bird_count: 150,
            purpose: 'Egg Production',
            acqusition: 'Purchased',
            date: '2024-08-17',
        },
        {
            key: '2',
            f_Name: 'Flock B',
            icon: 'Duck',
            active_bird_count: 200,
            purpose: 'Meat Production',
            acqusition: 'Bred',
            date: '2024-08-10',
        },
        {
            key: '3',
            f_Name: 'Flock C',
            icon: 'Turkey',
            active_bird_count: 80,
            purpose: 'Breeding',
            acqusition: 'Purchased',
            date: '2024-08-05',
        },
        {
            key: '4',
            f_Name: 'Flock D',
            icon: 'Quail',
            active_bird_count: 300,
            purpose: 'Egg Production',
            acqusition: 'Bred',
            date: '2024-07-28',
        },
        {
            key: '5',
            f_Name: 'Flock E',
            icon: 'Goose',
            active_bird_count: 120,
            purpose: 'Feather Production',
            acqusition: 'Purchased',
            date: '2024-07-20',
        },
        {
            key: '6',
            f_Name: 'Flock F',
            icon: 'Chicken',
            active_bird_count: 250,
            purpose: 'Meat Production',
            acqusition: 'Bred',
            date: '2024-07-15',
        },
        {
            key: '7',
            f_Name: 'Flock G',
            icon: 'Duck',
            active_bird_count: 180,
            purpose: 'Egg Production',
            acqusition: 'Purchased',
            date: '2024-07-10',
        },
        {
            key: '8',
            f_Name: 'Flock H',
            icon: 'Turkey',
            active_bird_count: 90,
            purpose: 'Breeding',
            acqusition: 'Bred',
            date: '2024-07-05',
        },
        {
            key: '9',
            f_Name: 'Flock I',
            icon: 'Quail',
            active_bird_count: 220,
            purpose: 'Meat Production',
            acqusition: 'Purchased',
            date: '2024-06-30',
        },
        {
            key: '10',
            f_Name: 'Flock J',
            icon: 'Goose',
            active_bird_count: 100,
            purpose: 'Feather Production',
            acqusition: 'Bred',
            date: '2024-06-25',
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
    };

    return <>
        <Space className="flex justify-end mb-3"><Button type="primary" onClick={() => { setisModalOpen(true); setIsEdit(false) }}>Add Flock</Button></Space>
        <Table dataSource={dataSource} columns={columns} />;

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
                        name="flockName"
                        label="Flock/Batch Name"
                        rules={[{ required: true, message: 'Please enter the flock or batch name!' }]}
                    >
                        <Input placeholder="Enter flock or batch name" />
                    </Form.Item>
                    <Form.Item
                        name="birdType"
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
                        name="numberOfBirds"
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
                        name="acqusition"
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
                        name="date"
                        label="Date"
                        rules={[{ required: true, message: 'Please select the date!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} disabled={isEdit} />
                    </Form.Item>

                    <Form.Item
                        name="image"
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
                        name="flockDescription"
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