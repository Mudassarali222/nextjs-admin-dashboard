
import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import React from 'react'

const { TextArea } = Input;
const { Option } = Select;



interface FormProps {
    data: any;
    name: string;
    isLoading?:boolean;
    onFinish: (value: any) => void;
}

const CustomForm: React.FC<FormProps> = ({ data, name, onFinish,isLoading=false }: FormProps) => {
    console.log('Line 10:', data);
    const [form] = Form.useForm();

    const formFields = (fieldsValues: any) => {
        switch (fieldsValues.type) {
            case 'input':
                return <Form.Item name={fieldsValues.name} label={fieldsValues.label} rules={fieldsValues.rules} key={fieldsValues.name}>
                    <Input placeholder={fieldsValues.placeholder} />
                </Form.Item>
            case 'inputNumber':
                return <Form.Item name={fieldsValues.name} label={fieldsValues.label} rules={fieldsValues.rules} key={fieldsValues.name}>
                    <Input type='number' className='w-full' placeholder={fieldsValues.placeholder} />
                </Form.Item>
            case 'textArea':
                return <Form.Item name={fieldsValues.name} label={fieldsValues.label} rules={fieldsValues.rules} key={fieldsValues.name} >
                    <TextArea rows={fieldsValues.rows} placeholder={fieldsValues.placeholder} />
                </Form.Item>
            case 'datePicker':
                return <Form.Item className='w-full' name={fieldsValues.name} label={fieldsValues.label} rules={fieldsValues.rules} key={fieldsValues.name}>
                    <DatePicker className='w-full' placeholder={fieldsValues.placeholder} />
                </Form.Item>
            case 'select':
                return <Form.Item name={fieldsValues.name} label={fieldsValues.label} rules={fieldsValues.rules} key={fieldsValues.name}>
                     <Select placeholder={fieldsValues.placeholder} onChange={(e:any)=>{
                        form.setFieldValue(`${fieldsValues.name}`,e)
                        form.validateFields([`${fieldsValues.name}`])
                     }}>
                            {fieldsValues?.options.map((option:any) => (
                                <Option key={option.value} value={option.value} >
                                    {option.label}
                                </Option>
                            ))}
                        </Select> </Form.Item>
            case 'button':
                return (
                    <Form.Item  className={fieldsValues.className} key={fieldsValues.name}>
                        <Button loading={isLoading} type={fieldsValues.buttonType} htmlType={fieldsValues.htmlType}>
                            {fieldsValues.text}
                        </Button>
                    </Form.Item>
                );
            default:
                return null;
        }
    }


    return (
        <React.Fragment>
            <Form form={form} name={name} onFinish={onFinish} layout="vertical">
                {data?.map((item: any) => formFields(item))}
            </Form>
        </React.Fragment>
    )
}

export default CustomForm