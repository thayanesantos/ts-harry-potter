export function getHouseColor(house: string) {
    switch (house) {
        case 'Gryffindor':
            return 'bg-red-100 border-red-500 text-red-800';
        case 'Slytherin':
            return 'bg-green-100 border-green-500 text-green-800';
        case 'Ravenclaw':
            return 'bg-blue-100 border-blue-500 text-blue-800';
        case 'Hufflepuff':
            return 'bg-yellow-100 border-yellow-500 text-yellow-800';
        default:
            return 'bg-gray-100 border-gray-500 text-gray-700';
    }
}
