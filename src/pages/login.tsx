import { Input } from "@/components";
import { LoginAction } from "@/store/auth.slice";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import AuthLayout from "@/layouts/auth";

export default function LoginPage() {
    const dispatch: any = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values: any) => {
            values.username = values.email;
            dispatch(LoginAction(values));
        },
    });

    return <div className="w-full h-screen flex flex-col justify-center items-center">
        <h4 className="text-2xl font-bold mb-4">Login</h4>
        <form onSubmit={formik.handleSubmit} className="space-y-4 w-full max-w-md">
            <Input name="email" value={formik.values.email} type="text" placeholder="Email" error={formik.touched.email ? formik.errors.email : ""} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <Input name="password" value={formik.values.password} type="password" placeholder="Password" error={formik.touched.password ? formik.errors.password : ""} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Login</button>
        </form>
    </div>;
}
LoginPage.layout = AuthLayout;