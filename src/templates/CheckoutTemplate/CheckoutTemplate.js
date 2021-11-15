import { Fragment } from "react";
import {Route, Redirect} from "react-router"
import { USER_LOGIN } from "../../util/setting";
import { useEffect } from "react";


export const CheckoutTemplate = (props) => {
    const {Component,...restProps} = props;
    useEffect(() => {
        return () => {
          window.scrollTo(0,0)
        }
      })
    if (!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/login' />
    }

    return <Route {...restProps} render={(propsRoute) => { //props.location, props.history, props.match
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>

    }} />
}

