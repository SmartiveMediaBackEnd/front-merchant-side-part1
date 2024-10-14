

export function UseCustomTableSorting<T>(sortFunctions: any, data: T[], sortBy: string) {


    const arrangeData = (data: T[], sortBy: string) => {
        const sortFunction = sortFunctions[sortBy];
        if (!sortFunction) {
            return data;
        }
        if (!sortBy) {
            return data;
        }
        return data?.slice()?.sort(sortFunction);
    };

    const arrangedData: T[] = arrangeData(data, sortBy);

    return {
        arrangedData
    }
}