async function getHello() {
    const response = await fetch('http://localhost:5000/api/hello');
    console.log(response);
    const body = await response.json();
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return body;
}


export default { getHello };
