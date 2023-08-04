import React from 'react'
import { Button, Popconfirm, Table} from "antd";
import { Link } from 'react-router-dom';
import "../publics/css/manage.css"
import { useGetAccountsQuery, useRemovedAccountMutation } from '../../../lib/apis/apisAccount';
import Column from 'antd/es/table/Column';
import { Iaccount } from '../../../lib/interface/account';

type Props = {}

const ManageAccount = (props: Props) => {

    const { data: listAccount = [], isLoading } = useGetAccountsQuery();

    const [removedAccount, { isLoading : loadingRemoved }] = useRemovedAccountMutation()

    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <div className="w-full px-6 py-6 mx-auto">
                <Table 
                    dataSource={listAccount.map((item: Iaccount, index: Number) => ({
                            key: index,
                            id: item._id,
                            Email: item.email,
                            Password: item.password,
                            CteatedAt: item.createdAt,
                        }
                    ))}
                >

                    <Column title="Account" dataIndex="key" key="key" />
                    <Column title="Email or Phone number" dataIndex="Email" key="Email" />
                    <Column title="Password" dataIndex="Password" key="Password" />
                    <Column title="Created At" dataIndex="CteatedAt" key="CteatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(account) => {
                            return (
                                <Popconfirm
                                    placement="top"
                                    title="Bạn có muốn xóa không?"
                                    onConfirm={() => removedAccount(account.id)}
                                    okText="Có"
                                    cancelText="Không"
                                >
                                    <Button 
                                        type="primary" 
                                        style={{ margin: '0 5px' }} 
                                        danger
                                    >
                                        Xóa
                                    </Button>
                                </Popconfirm>
                            );
                        }}
                    ></Column>

                </Table>
            </div>
        </>
    )
}

export default ManageAccount