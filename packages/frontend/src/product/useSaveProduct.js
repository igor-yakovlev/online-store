const URL = '/api/products';

export function useSaveProduct() {
    const save = (product) => (fetch(`${window.location.origin}/${URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    }).then(res => res.json()));

    return { save }
}
