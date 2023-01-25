import { useRouteError } from "react-router-dom";
import useLang from "../../hooks/useLang";
import Alert from "../atoms/Alert";
import DefaultLayout from "../template/DefaultLayout";

const Error = () => {
    const { lang } = useLang()
    type RouteError = {
        statusText?: string;
        message?: string;
    }
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <DefaultLayout>
            <Alert name={lang.pageAlert} comment={lang.oops} msg={lang.errorOccur} w={"bad"} more={error.statusText || error.message} />
        </DefaultLayout>
    )
}

export default Error