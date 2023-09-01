const getFilters = (x?: number) => {
    if (x) {
        return [1, x];
    }

    return [1];
};

export default getFilters;
