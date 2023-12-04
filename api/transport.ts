import { apiInstance } from "./base";
import { Transport } from "./models";

export const getTransport = () => {
    return apiInstance.get<Transport[]>(`/transport`, {}).catch(error => console.log(error));
 }