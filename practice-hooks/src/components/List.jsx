import { useMemo, useDeferredValue } from "react";
const List = ({ input }) => {
    const LIST_SIZE = 20000;
    //take the input and do not update until there has been some time between changes
    const deferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        const l = [];
        for(let i = 0; i < LIST_SIZE; i++){
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    }, [deferredInput])

    return list;
}
export default List;