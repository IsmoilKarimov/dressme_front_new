const { REACT_APP_BASE_URL } = process.env;

export const useHttp = () => {
    const request = async ({
        url = "",
        method = "GET",
        body = "null",
        headers = {},
        token = false,
    }) => {
        if (token) {
            headers["authorization"] = `Bearer ${localStorage.getItem("DressmeUserToken")}`;
            headers["Content-type"] = "application/json";
            headers["Accept"] = "application/json";
        }
        let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
            method,
            body: method === "GET" ? null : JSON.stringify(body),
            headers,
        }).then((res) => res.json());
        if (res) {
            return res;
        } else {
            throw new Error(res?.message || "something wrong");
        }
    };
    return { request };
};