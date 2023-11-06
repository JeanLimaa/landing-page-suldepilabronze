function createData(name: string, price: number) {
    return { name, price };
}

export const rows = [
    createData('ExBronze1', 3031),
    createData('Bronze2', 4532),
    createData('Bronze3', 2612),
    createData('Bronze4', 1592),
    createData('Bronze5', 3562),
    createData('Bronze6', 4032),
].sort((a, b) => (a.price < b.price ? -1 : 1));

export const rowsDepil = [
    createData('ExDepilação', 303),
    createData('Depilação2', 453),
    createData('Depilação3', 261),
].sort((a, b) => (a.price < b.price ? -1 : 1));

export const rowsLimpeza = [
    createData('ExLimpeza', 303),
    createData('Limpeza2', 453),
    createData('Limpeza3', 261),
    createData('Limpeza4', 159),
    createData('Limpeza5', 356),
    createData('Limpeza6', 403),
].sort((a, b) => (a.price < b.price ? -1 : 1));