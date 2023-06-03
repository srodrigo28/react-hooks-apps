export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    youtImc?: number;
}

export const levels: Level[] = [
    { title: 'Abaixo do peso',       color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Peso Ideal',           color: '#0EAD69', icon: 'up',   imc: [18.6, 24] },
    { title: 'Sobre o peso',         color: '#E28039', icon: 'down', imc: [25, 30] },
    { title: 'Fobia de peso',        color: '#C3423F', icon: 'down', imc: [30.1, 99] }

]

export const calculeteImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels){
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy: Level = { ...levels[i] };
            
                levelCopy.youtImc = imc;
                return levelCopy;
            }
        }
    return null
}