


// [1,2,3,4,5,...,7]
export const generatePaginationNumbers = ( currentPage: number, totalPages: number ) => {

    // Si el número total de páginas es 7 o menos, vamos a mostrar todas las páginas sin puntos suspensivos
    if ( totalPages <= 7 ) {
        return Array.from({ length: totalPages }, (_, index) => index + 1); // [1,2,3,4,5,6,7]
    }

    // Si la página actual está entre las primeras 3 páginas, vamos a mostrar las primeras 3, puntos suspensivos, y las últimas 2
    if ( currentPage <= 3 ) {
        return [1,2,3,'...', totalPages - 1, totalPages];
    }

    // Si la página actual está entre las últimas 3 páginas, vamos a mostrar las primeras 2, puntos suspensivos, y las últimas 3
    if ( currentPage >= totalPages - 2 ) {
        return [1,2,'...', totalPages - 2, totalPages - 1, totalPages];
    }

    // Si la página actual está en otro lugar medio, mostrar la primera página, puntos suspensivos, la página actual y vecinos
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
    ]

}