import React, { useEffect, useState } from 'react'
import { UserApi } from '../../api/Api'
import { Link, useSearchParams } from 'react-router-dom';

export default function EmailVerifyPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [result, setResult] = useState<string>("")
    const token = searchParams.get("token")

    useEffect(() => {
        if (token) {
            UserApi.EmailVerify(token).then(res => setResult(res.data.msg))
        }
        else {
            alert("this token is invalid")
        }
    }, [])
    return (
        <>
            {
                result !== "" ? <div>
                    <h3>Congratulations, your account has been verified.</h3>
                    <h4>
                        <Link to="/login">
                            Click here to Login
                        </Link>
                    </h4>
                </div>
                    :
                    <div>:/</div>
            }
        </>


    )
}