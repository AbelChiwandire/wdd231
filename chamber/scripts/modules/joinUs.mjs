export function populateTimestamp() {
    const ts = document.getElementById('timestamp');
    if (ts) {
        ts.value = new Date().toLocaleString();
        console.log('Timestamp populated:', ts.value);
    } else {
        console.warn('Timestamp field not found');
    }
}