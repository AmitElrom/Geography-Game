const buildUrl = (questionsQuantity, maxKnown, minKnown, similarities) => {
    return `${process.env.REACT_APP_SERVER_BASE_URL}/countries-elrom?questions-quantity=${questionsQuantity}${maxKnown ? `&maxknown=${maxKnown}` : ''}${minKnown ? `&minknown=${minKnown}` : ''}${similarities ? `&similarities=${similarities}` : ''}`
}

export { buildUrl };