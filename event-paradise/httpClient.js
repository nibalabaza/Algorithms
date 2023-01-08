const base = "http://localhost:8090";
const requestOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    }
}


async function get(route) {
    let res = await fetch(`${base}${route}`, requestOptions)
    if (res.status === 200 && res.headers.get("Content-Type") === "application/json") {
        return await res.json();
    }
    return [];
}

async function getThemes() {
    return await get('/themes');
}


async function getLocations() {
    return await get('/locations');
}


async function getEvents() {
    return await get('/events');
}

async function createEvent(event) {

    let res = await fetch(`${base}/events`, {...requestOptions, method: 'POST', body: JSON.stringify(event)})
    if (res.headers.get("Content-Type") === "application/json") {
        return {status: res.status, content: await res.json()};
    }
    return {status: res.status, content: []};
}








  