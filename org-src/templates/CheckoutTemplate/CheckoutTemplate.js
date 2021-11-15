import { Fragment } from "react";
import {Route, Redirect} from "react-router"
import { USER_LOGIN } from "../../util/setting";


export const CheckoutTemplate = (props) => {
    const {Component,...restProps} = props;
    if (!localStorage(USER_LOGIN)){
        return <Redirect to='/login' />
    }

    return <Route {...restProps} render={(propsRoute) => { //props.location, props.history, props.match
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>

    }} />
}

