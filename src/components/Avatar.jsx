/*eslint-disable*/

import styles from './Avatar.module.css';

//aplicando destructuring e definindo hasBorder como true por padrão
//o destructuring retira propriedades de um objeto e as transforma em variáveis
export function Avatar({hasBorder = true, src}) {
    // const hasBorder = props.hasBorder !== false; //se tiver qualquer valor que não seja hasBorder = { false } ele vai ter borda por padrão

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    );
}