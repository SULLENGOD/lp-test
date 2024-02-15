export const fetchData = async() => {
    const url = 'https://rickandmortyapi.com/api/character';
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
};

export const fetchChar = async(id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
};