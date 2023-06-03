import a from './AppImc.module.css'
import poweredImage from './../../assets/imc/powered.png';
import { useState } from 'react';
import { Level, calculeteImc, levels } from './imc'
import { GridItem } from './GridItem';

export function AppImc() {
    const [heightField, setHeightField] = useState<number>(0);
    const [wightField, setWightField] = useState<number>(0);

    const handleCalculateButton = () => {
        if (heightField && wightField) {
            
        } else {
            alert("Digite todos os campos. ")
        }
    }
    return (
        <div className={a.main}>
            <div className={a.headerContainer}>
                <img src={poweredImage} alt="image-header" width={150} />
            </div>

            <div className={a.container}>
                <div className={a.leftSide}>
                    <h1>Calcule seu IMC.</h1>
                    <p>
                        A classificação do índice de massa corporal (IMC)
                        pode ajudar a identificar problemas de obesidade ou desnutrição,
                        em crianças, adolescentes, adultos e idosos.
                    </p>

                    <input
                        type="number"
                        placeholder="Digite a sua altura. Ex: 1.5 (em métros)"     
                        value={ heightField > 0 ? heightField : '' }
                        onChange={ (e) => setHeightField(parseFloat(e.target.value))}
                    />

                    <input
                        type="number"
                        placeholder="Digite o seu peso. Ex: 1.5 (em kg)"     
                        value={ wightField > 0 ? wightField : '' }
                        onChange={ (e) => setWightField(parseFloat(e.target.value))}
                    />

                    <button onClick={handleCalculateButton}>Calcular</button>

                </div>

                <div className={a.rightSide}>
                    <div className={a.grid}>
                        { levels.map((item, key) => (
                            <GridItem key={key} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}