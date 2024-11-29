import { FormikErrors } from "formik";

interface IProps {
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    error?: string | FormikErrors<any> | string[] | FormikErrors<any>[] | undefined;
    value?: string;
    onChange?: (e: any) => void;
    [key: string]: any;
}

export default function Input({ name, type, error, label, ...props }: IProps) {
    return <div className="w-full">
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} name={name} {...props} className={`w-full p-2 border rounded-md ${error ? "border-red-500" : ""}`} />
        {error && <div className="text-red-500">{error.toString()}</div>}
    </div>;
}
