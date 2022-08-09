const buildUrl = (questionsQuantity, maxKnown, minKnown, similarities) => {
    return `http://localhost:8000/countries-elrom?questions-quantity=${questionsQuantity}${maxKnown ? `&maxknown=${maxKnown}` : ''}${minKnown ? `&minknown=${minKnown}` : ''}${similarities ? `&similarities=${similarities}` : ''}`
}

export { buildUrl };