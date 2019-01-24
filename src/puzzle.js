const wordMix = ['baseball', 'science', 'flower', 'castle', 'knight', 'crocodile', 'internet', 'sporting',
        'museum', 'fitness', 'swimming', 'politics', 'government', 'photograph', 'geography', 'birthday', 'furniture',
        'highway', 'aeroplane', 'music', 'olympics', 'language', 'commodity', 'warehouse', 'excavator', 'upholstery',
        'container', 'gardening', 'railway', 'university', 'sailing', 'marathon', 'android', 'device', 'currency', 
        'computer', 'attendance', 'uniform', 'employment', 'honesty', 'dancing', 'kingdom', 'gladiator', 'warrior',
        'soldier', 'turtle', 'rainforrest', 'titanium', 'battery', 'solar', 'atmosphere', 'planet', 'machine', 'terrain',
        'dessert', 'respected', 'induction', 'industry', 'mountain', 'elephant', 'wonderful', 'racing', 'competition', 
        'island', 'graduation', 'achievement', 'shopping', 'beach']


const getPuzzle = async () => {
    let wordPuzzle = await wordMix[Math.floor(Math.random() * wordMix.length)]
    
    let puzzle = await wordPuzzle
    return puzzle

}

export { getPuzzle }