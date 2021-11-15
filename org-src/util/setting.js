
import axios from "axios";
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIwNS8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDQwMTkyMDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NDE2NjgwMH0.iIk4OcH5Y7-xv_PZiazsjcBJkUj-eyGHjgFCfmWNnL0";
export const GROUP_ID = 'GP01'
export const USER_LOGIN = 'userLogin';
export const ACCESS_TOKEN = 'accessToken';

//Cấu hình interceptor cho axios (Tất cả request gọi = axios đều được cấu hình) (1 dự án làm 1 duy nhất)
export const http = axios.create({
    baseURL:'https://movienew.cybersoft.edu.vn',
    timeout:30000,
})

http.interceptors.request.use((config)=>{
    config.headers = {
        ...config.headers,
        'Authorization': localStorage.getItem(ACCESS_TOKEN),  //Token mà người dùng đăng nhập
        // 'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5hbmhraG9hMiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImJlZXouYWhrMTRAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJiZWV6LmFoazE0QGdtYWlsLmNvbSIsIkdQMDEiXSwibmJmIjoxNjMxMzQ5MzMxLCJleHAiOjE2MzEzNTI5MzF9.FUSLysCBgJEyXXAdKoVpaW0AjtqEQjyCsQKlX-Vpft4',
        'TokenCybersoft':TOKEN_CYBERSOFT,
    }
    return config
}, (errors) => {
    return Promise.reject(errors)
})
