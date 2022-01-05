import { useState, useCallback } from "react";

export default function useCopyToClipboard(url) {
    const [urlIsCopied, setUrlIsCopied] = useState(false);


    const copyURLToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(url);
            console.log(`${url} was coppied to the clipboard`);
            setUrlIsCopied(true);
        } catch (error) {
            console.log(error);
        }
    }, [url]);

    return [urlIsCopied, copyURLToClipboard];
};

