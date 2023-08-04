import { Button, Form, Input, message } from 'antd'
import React, { useEffect } from 'react'
import { Iaccount } from '../../../lib/interface/account';
import { useSignupMutation } from '../../../lib/apis/apisAuth';
import { Navigate } from 'react-router-dom';

type Props = {}

const RegisterManage = (props: Props) => {

    const [registerAccount, { isLoading, isError, error, isSuccess }] = useSignupMutation()

    const onFinish = async (values: Iaccount) => {

        const register = await registerAccount(values);

        const data = JSON.stringify(register);
        const res = JSON.parse(data);

        if(res.data.error_code == 0){

            sessionStorage.setItem('isLoggedIn', 'true');
            message.success(`Login Success!`);
            window.location.href = '/admin';

        }
        
    };

    const onFinishFailed = (errorInfo: any) => {
    };

    useEffect(() => {
        const clearSessionAfter30Minutes = () => {
          sessionStorage.removeItem('isLoggedIn');
          // Tiến hành chuyển hướng sau khi tự động đăng xuất
          window.location.href = '/signup'; // Hoặc chuyển hướng tới trang đăng nhập khác
        };
    
        const timerId = setTimeout(clearSessionAfter30Minutes, 1800000); // 30 phút = 1800000 milliseconds
    
        return () => clearTimeout(timerId); // Clear timer khi component unmount (đăng xuất, thoát ứng dụng, ...)
      }, []);


    return (
        <div 
            className='container'
            style={{
                margin: "auto",
                height: "100vh",
                display:"flex",
                justifyContent: "center",
                alignItems:'center',
                flexDirection: "column"
            }}
        >

            <div
                className="item-left col-md-5 col-10"
                style={{
                    display:"flex",
                    justifyContent: "center",
                    alignItems:'center',
                    flexDirection: "column"
                }}
            >
                <div 
                    className="logo" 
                    style={{
                        maxWidth: "200px", 
                        margin: "auto"
                    }}
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1000px-Shopee.svg.png" className='desk' width="100%" alt="Facebook" />
                    <img src="https://logodix.com/logo/2015085.png" className='mob' width="100%" alt="Facebook" />
                </div>
            </div>

            <div className="fom col-md-3 col-10">
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{
                    margin: "35px auto",
                    display:"flex",
                    justifyContent: "center",
                    alignItems:'center',
                    flexDirection: "column"
                }}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: `Email is required!`,
                        },
                    ]}
                    style={{
                        width: "100%"
                    }}
                >
                    <Input placeholder="Your email address" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: `Password is required!`
                        },
                    ]}
                    style={{
                        width: "100%"
                    }}
                >
                    <Input.Password placeholder="Your password" />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
            </div>

        </div>
    )
}

export default RegisterManage