import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

export default function DefaultLayout({ children }: {
    children: ReactNode
}) {
    const { auth_user } = useSelector((state: any) => state.auth);
    const router = useRouter();
    useEffect(() => {
        if (!auth_user) {
            router.push("/login");
        }
    }, [auth_user]);
    return <>
        {children}
    </>
}