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

export const fetchInputs = async() => {
    const url = 'https://run.mocky.io/v3/6f50cbf8-1ec6-4a89-940f-5b7f38bd28bf';
    const res = await fetch(url);
    const data = await res.json();

    return data;
}