// import { useCallback, useState } from "react";
import axios from "axios";

export default function useHttpRequest(configObj, callback) {
    const makeRequest = async () => {
        try {
            const response = await axios.get(configObj.url);
            callback(response.data.result);

            console.log(response.data.result, 'bvbvbvbv')

        } catch(err) {
            console.log(err);
        }
    };

    return makeRequest;
};