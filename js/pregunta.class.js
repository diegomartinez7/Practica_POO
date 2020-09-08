class Pregunta {
    //Propiedades
    texto = '';
    favor = 0;
    contra = 0;
    abstencion = 0;
    id = 0;

    crearPregunta(pregunta) {
        this.texto = pregunta;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${++this.id}</th>
        <td>${this.texto}</td>
        <td id="votos${this.id}">
            <div class="btn-group">
                <button class="btn btn-success" id="favor">A favor</button>
                <button class="btn btn-danger" id="contra">En contra</button>
                <button class="btn btn-secondary" id="abstener">Abstención</button>
             </div>
        </td>
        <td>
            <button class="btn btn-block btn-primary" id="terminar">Terminar</button>
        </td>
        <td>
            <div class="d-flex" id="contenedorAlert"></div>
        </td>`;
        return tr;
    }
}