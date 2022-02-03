import { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import {request} from "services/api";

const useGeneralAPIQuery = <Data = any, Error = any>(
    url: string,
    params: object = {},
    options: UseQueryOptions<AxiosResponse<Data>, Error> = {}
) =>
useQuery(
    [url, params],
    () => request.get<Data>(url, { params }),
    {
        ...options,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
    }
);

export default useGeneralAPIQuery;
