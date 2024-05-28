import { Helmet } from "react-helmet";
import { Text, Img, Heading, CheckBox, Button } from "../../components";
import Header2 from "../../components/Header2";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileEditValidateSchema } from "../../validates/ValidateSchema";
import { useEffect, useState, ChangeEvent } from "react";
import { useFormik } from "formik";

export default function ProfilePage() {
    let accessToken = useSelector((state: any) => state.auth.accessToken)
    let userInformation: UserInfo = useSelector((state: any) => state.userInfo.userInfo)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState<UserInfo>({
        accountName: '',
        email: '',
        phone: '',
        address: ''
    })

    const formik = useFormik({
        initialValues: {
            accountName: '',
            email: '',
            phone: '',
            address: ''
        },
        validationSchema: profileEditValidateSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
        }
    });
    useEffect(() => {
        console.log(userInformation)
        if (accessToken === null) {
            if (localStorage.getItem('access-token') !== null) {
                accessToken = localStorage.getItem('access-token')
                userInformation = JSON.parse(localStorage.getItem('user-info')!)
                console.log(userInformation)
            }
            else {
                navigate('/login')
            }
        }
    }, [])

    const handleInput = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value.trim()
        })
    }

    // accessToken = accessToken === null ? accessToken : localStorage.getItem('access-token')

    return (
        <>
            <Helmet>
                <title>Rosaceae</title>
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
            </Helmet>
            <div className="flex w-full flex-col bg-white-A700">
                <Header2 className="ml-[12rem]" userName={userInformation.accountName} />
            </div>
            <div className="mt-[61px] flex flex-col gap-[43px] self-stretch">
                <div className="flex flex-col gap-[35px]">
                    <div className="flex flex-col items-start gap-3.5">
                        <Heading
                            size="4xl"
                            as="h2"
                            className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                        >
                            Username
                        </Heading>
                        <input
                            name="accountName"
                            type="text"
                            value={userInformation.accountName}
                            className="self-stretch rounded-[40px] px-2 py-3 border-2 border-solid border-black-900 font-nunito tracking-[2.40px] !text-black-900 sm:px-5"
                            onChange={e => { formik.handleChange(e); handleInput(e) }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.accountName && formik.errors.accountName && (
                            <div className='flex-1 flex items-center mt-2 text-red-500 italic text-sm'>{formik.errors.accountName}</div>
                        )}
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                        <Heading
                            size="4xl"
                            as="h2"
                            className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                        >
                            Email
                        </Heading>
                        <input
                            name="email"
                            type="text"
                            value={userInformation.email}
                            className="self-stretch rounded-[40px] px-2 py-3 border-2 border-solid border-black-900 font-nunito tracking-[2.40px] !text-black-900 sm:px-5"
                            onChange={e => { formik.handleChange(e); handleInput(e) }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className='flex-1 flex items-center mt-2 text-red-500 italic text-sm'>{formik.errors.email}</div>
                        )}
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                        <Heading
                            size="4xl"
                            as="h2"
                            className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                        >
                            Phone
                        </Heading>
                        <input
                            name="phone"
                            type="text"
                            value={userInformation.phone}
                            className="self-stretch rounded-[40px] px-2 py-3 border-2 border-solid border-black-900 font-nunito tracking-[2.40px] !text-black-900 sm:px-5"
                            onChange={e => { formik.handleChange(e); handleInput(e) }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <div className='flex-1 flex items-center mt-2 text-red-500 italic text-sm'>{formik.errors.phone}</div>
                        )}
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                        <Heading
                            size="4xl"
                            as="h2"
                            className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                        >
                            Address
                        </Heading>
                        <input
                            name="address"
                            type="text"
                            value={userInformation.address}
                            className="self-stretch rounded-[40px] px-2 py-3 border-2 border-solid border-black-900 font-nunito tracking-[2.40px] !text-black-900 sm:px-5"
                            onChange={e => { formik.handleChange(e); handleInput(e) }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address && (
                            <div className='flex-1 flex items-center mt-2 text-red-500 italic text-sm'>{formik.errors.address}</div>
                        )}
                    </div>
                </div>
                <Button
                    color="black_900"
                    size="11xl"
                    className="w-full rounded-[40px] font-nunito font-extrabold tracking-[2.80px] sm:px-5"
                    onClick={() => console.log(userInfo)}
                >
                    Save
                </Button>
            </div>
        </>
    )

}