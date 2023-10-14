function createData(name: string, price: number) {
    return { name, price };
}

export const rows = [
    createData('Cupcake', 303125),
    createData('Donut', 453212),
    createData('Eclair', 26122),
    createData('Frozen yoghurt', 1592),
    createData('Gingerbread', 3562),
    createData('Honeycomb', 4032185),
].sort((a, b) => (a.price < b.price ? -1 : 1));

export const rowsDepil = [
    createData('Depilação', 303125),
    createData('Donut', 453212),
    createData('Eclair', 26122),
].sort((a, b) => (a.price < b.price ? -1 : 1));

export const rowsLimpeza = [
    createData('Limpeza', 303125),
    createData('Donut', 453212),
    createData('Eclair', 26122),
    createData('Frozen yoghurt', 1592),
    createData('Gingerbread', 3562),
    createData('Honeycomb', 4032185),
].sort((a, b) => (a.price < b.price ? -1 : 1));