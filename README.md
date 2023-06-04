# Projetos & Hooks Revisões
* Referências
```
https://alunos.b7web.com.br/curso/reactjs/enviando-requisicoes-post-2
```

```
https://alunos.b7web.com.br/curso/reactjs/react-imc-calculando-o-imc
```

```
https://alunos.b7web.com.br/curso/reactjs/memoria-introducao-ao-projeto
```

* UserEfect 2
```
https://alunos.b7web.com.br/curso/reactjs/react-usando-useeffect-na-pratica
```

# Instalando e usando UUIDV4
* uuid e types
```
npm i --save-dev uuid @types/uuid
```

* Importar no arquivo
```
import {v4 as uuidv4} from 'uuid';
```

* criar variavel a receber
```
const id = uuidv4();
```

* Exemplo Usando map com uuid
```
<div>
    {movies.map((item) => (
        <div key={item.titulo+id} >
            <img src={item.avatar} width={100} className="avatar" />
            {item.titulo}
        </div>
    ))}
</div>
```

