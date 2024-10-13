import { Modal } from 'antd';
import React from 'react'

interface ModalProps{
    isOpen:boolean;
    onClose:() => void;
    onDone:() => void;
    isLoading:boolean;
    text?:string;
}

const DeleteModal = ({isOpen=false,onClose,onDone,text,isLoading=false}:ModalProps) => {
  return (
    <React.Fragment>
        <Modal
                open={isOpen}
                title={'Confirmation'}
                okButtonProps={{loading:isLoading}}
                // cancelButtonProps={{ title:'No', }}
                onCancel={() => {
                    onClose()
                }}
                onOk={()=>{
                    onDone()
                }}
                cancelText='No'
                okText='Yes'
            >
                <p>{text ? text:  'Are you sure you want to delete?'}</p>
            </Modal>
    </React.Fragment>
  )
}

export default DeleteModal