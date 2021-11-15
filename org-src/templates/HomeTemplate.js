import { Fragment, useEffect, useState } from "react";

//Fragment giống thẻ div mà không hiển thị chỉ dùng để bao bọc trang
import { Route } from "react-router-dom"
import Footer from "../components/HomePage/Footer/Footer";
import Header from "../components/HomePage/Header/Header"





export const HomeTemplate = (props) => {
//props (path,component)
    const [state,setState] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    })
    useEffect(()=>{
        //Chạy khi window load lần đầu
        window.onload = () => {
            setState({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        //Chạy mỗi khi window thay đổi kích thước
        window.onresize = () => {
            setState({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
    },[])

    const renderComponent = (propsRoute) =>{
        if(state.width <= 768) {
            if(props.mobileComponent) {
                return <props.mobileComponent {...propsRoute} />
            }
            return <props.component {...propsRoute}/>
        }
        return <props.component {...propsRoute}/>
    }

    return <Route exact path={props.path} render={(propsRoute)=>{

           return <Fragment>
               <Header />
                {renderComponent(propsRoute)}
                <Footer/>
           </Fragment>
        }} />
 
}