import { useLayoutEffect, useEffect, useRef } from "react";
const PractUseLayout =  () => {

    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log('UseLayoutEffect:', inputRef.current.value)
    }, [])

    useEffect(() => {
        inputRef.current.value = "HELLO"
    }, [])

    return (
        <div>
            <input ref={inputRef} value="ANDREA" style={{ width: 400, height: 60 }} />
        </div>
    );
}
export default PractUseLayout;