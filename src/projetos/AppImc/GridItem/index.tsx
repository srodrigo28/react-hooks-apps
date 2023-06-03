import { Level } from '../imc';
import b from './GridItem.module.css';
import upImage from './../../../assets/imc/up.png';
import downImage from './../../../assets/imc/down.png';

type Props = {
    item: Level
};

export const GridItem = ( { item } : Props) => {
    return (
        <div className={b.main} style={ { backgroundColor: item.color }}>
            <div className={b.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt='aaa' width={30} />}
                { item.icon === 'down' && <img src={downImage} alt='aaa' width={30}/> }
            </div>
            <div className={b.gridTitle}>
                {item.title}
            </div>
            <div className={b.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong> {item.imc[1]} </strong>
                </>
            </div>
        </div>
    )
}