// Función para configurar la validación campo por campo
function setupValidation() {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    // Recorremos todos los formularios que necesitan validación
    Array.prototype.slice.call(forms).forEach(function (form) {
        // Añadimos el evento 'submit' para la validación del formulario completo
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);

        // Añadimos validación individual en cada input al perder el foco (blur)
        const inputs = form.querySelectorAll('input, select, textarea'); // Todos los inputs
        inputs.forEach(function (input) {
            // Evento al salir del foco (blur) para validar el campo individualmente
            input.addEventListener('blur', function () {
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid'); // Añadir clase para mostrar error
                    input.classList.remove('is-valid');
                } else {
                    input.classList.add('is-valid');   // Añadir clase para mostrar éxito
                    input.classList.remove('is-invalid');
                }
            });

            // Evento mientras se escribe (input) para validar de forma dinámica
            input.addEventListener('input', function () {
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid');
                    input.classList.remove('is-valid');
                } else {
                    input.classList.add('is-valid');
                    input.classList.remove('is-invalid');
                }
            });
        });
    });
}


function analisis_suelo() {
    document.getElementById("analisis_suelo").innerHTML = `
        <div class="container my-5">
            <h2 class="text-center text-success mb-4">Análisis del suelo</h2>
            <form class="needs-validation" novalidate >
                <div class="row">
                    <!-- Columna izquierda -->
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="n-nh4" class="form-label">N-NH4</label>
                            <input type="text" class="form-control" id="n-nh4" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="n-no3" class="form-label">N-NO3</label>
                            <input type="text" class="form-control" id="n-no3" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="potasio" class="form-label">Potasio</label>
                            <input type="text" class="form-control" id="potasio" placeholder="meq/cc" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="calcio" class="form-label">Calcio</label>
                            <input type="text" class="form-control" id="calcio" placeholder="meq/cc" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="magnesio" class="form-label">Magnesio</label>
                            <input type="text" class="form-control" id="magnesio" placeholder="meq/cc" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="sodio" class="form-label">Sodio</label>
                            <input type="text" class="form-control" id="sodio" placeholder="meq/cc" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="cic" class="form-label">C.I.C</label>
                            <input type="text" class="form-control" id="cic" placeholder="meq/cc" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="fosforo" class="form-label">Fósforo</label>
                            <input type="text" class="form-control" id="fosforo" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                    </div>

                    <!-- Columna central -->
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="azufre" class="form-label">Azufre</label>
                            <input type="text" class="form-control" id="azufre" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="hierro" class="form-label">Hierro</label>
                            <input type="text" class="form-control" id="hierro" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="manganeso" class="form-label">Manganeso</label>
                            <input type="text" class="form-control" id="manganeso" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="cobre" class="form-label">Cobre</label>
                            <input type="text" class="form-control" id="cobre" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="zinc" class="form-label">Zinc</label>
                            <input type="text" class="form-control" id="zinc" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <label for="boro" class="form-label">Boro</label>
                            <input type="text" class="form-control" id="boro" placeholder="ppm" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                    </div>

                    <!-- Columna derecha -->
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="ph" class="form-label">pH</label>
                            <input type="text" class="form-control" id="ph" placeholder="pH" pattern="^(14(\.0)?|[0-1]?[0-9](\.[0-9])?)$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <h5>Textura</h5>
                            <label for="arena" class="form-label">Arena</label>
                            <input type="text" class="form-control" id="arena" placeholder="%" pattern="^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$" required>
                            <div class="invalid-feedback">Type a valid percentage.</div>
                        </div>
                        <div class="mb-3">
                            <label for="limo" class="form-label">Limo</label>
                            <input type="text" class="form-control" id="limo" placeholder="%" pattern="^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$" required>
                            <div class="invalid-feedback">Type a valid percentage.</div>
                        </div>
                        <div class="mb-3">
                            <label for="arcilla" class="form-label">Arcilla</label>
                            <input type="text" class="form-control" id="arcilla" placeholder="%" pattern="^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$" required>
                            <div class="invalid-feedback">Type a valid percentage.</div>
                        </div>
                    </div>
                </div>

                <!-- Botón de enviar -->
                <div class="text-center mt-4">
                    <button type="submit" class="btn btn-success">Realizar análisis</button>
                </div>
            </form>
        </div>
        <!-- Modal para el resultado -->
        <div class="modal" id="resultadoModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
        <h5 class="modal-title">Resultado del análisis</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="resultadoModalBody">
                        <!-- El contenido se llenará dinámicamente -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
</div>
    `;

    setupValidation(); // Configurar validación
    setupFormSubmission(); // envio de formulario
}

let db;
function reg_cultivo() {
    document.getElementById("analisis_suelo").innerHTML = `
         <div class="form-container">
    <h3 class="text-center" style="color: green;">Crea tu cultivo</h3>
    <form class="needs-validation" id="cultivoForm" novalidate>
      <!-- Nombre -->
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" placeholder="Nombre del cultivo" pattern="[A-Za-z ]{3,50}" required>
        <div class="invalid-feedback">
          El nombre debe contener solo letras y al menos 3 caracteres.
        </div>
      </div>

      <!-- Nº Hectáreas -->
      <div class="mb-3">
        <label for="hectareas" class="form-label">Nº Hectáreas</label>
        <input type="number" class="form-control" id="hectareas" placeholder="Número de hectáreas" min="1" required>
        <div class="invalid-feedback">
          Ingrese un número válido de hectáreas.
        </div>
      </div>

      <!-- Variedad de mango -->
      <div class="mb-3">
        <label for="variedad" class="form-label">Variedad de mango</label>
        <select class="form-select" id="variedad" required>
          <option selected disabled value="">Elige una opción</option>
          <option value="Mango Keitt">Mango Keitt</option>
          <option value="Mango Tommy Atkins">Mango Tommy Atkins</option>
        </select>
        <div class="invalid-feedback">
          Selecciona una variedad de mango.
        </div>
      </div>

      <!-- Tipo de siembra -->
      <div class="mb-3">
        <label for="tipoSiembra" class="form-label">Tipo de siembra</label>
        <select class="form-select" id="tipoSiembra" required>
          <option selected disabled value="">Elige un tipo</option>
          <option value="Rectangular">Rectangular</option>
          <option value="Triangular">Triangular</option>
        </select>
        <div class="invalid-feedback">
          Selecciona un tipo de siembra.
        </div>
      </div>

      <!-- Tipo de mercado -->
      <div class="mb-3">
        <label for="tipoMercado" class="form-label">Tipo de mercado</label>
        <select class="form-select" id="tipoMercado" required>
          <option selected disabled value="">Elige un tipo</option>
          <option value="Mercado Nacional">Mercado Nacional</option>
          <option value="Mercado Internacional">Mercado Internacional</option>
        </select>
        <div class="invalid-feedback">
          Selecciona un tipo de mercado.
        </div>
      </div>

      <!-- Botón de guardar -->
      <button class="btn btn-success w-100" type="submit">Guardar</button>
    </form>
  </div>
    `;
    setupValidation(); // Configurar validación
    setupDatabase();
    loadCultivos();

    document.getElementById('cultivoForm').addEventListener('submit', function(event){
        event.preventDefault();
        if (this.checkValidity()){
            saveCultivo();
        }
        this.classList.add('was-validated');
    });
}

//configuracion de la BD
function setupDatabase() {
    let request = indexedDB.open('CultivosDB', 1);

    request.onerror = function(event){
        console.error("Error al abrir la base de datos:", event.target.error);
    };

    request.onsuccess = function(event){
        db = event.target.result;
        loadCultivos();
    };
    request.onupgradeneeded = function(event){
        let db = event.target.result;
        let objectStore = db.createObjectStore('cultivos', {keyPath: 'id', autoincrement: true});
        objectStore.createIndex("nombre", "nombre", {unique: false});
    };

}

//gaurdar nuevos cultivos
function saveCultivo(){
    let cultivo = {
        nombre: document.getElementById('nombre').value,
        hectareas: document.getElementById('hectareas').value,
        variedad: document.getElementById('variedad').value,
        tipoSiembra: document.getElementById('tipoSiembra').value,
        tipoMercado: document.getElementById('tipoMercado').value
    };

    let transaction = db.transaction(["cultivos"], "readwrite");
    let objectStore = transaction.objectStore("cultivos");
    let request = objectStore.add(cultivo);

    request.onsuccess = function(event){
        console.log("Cultivo añadido a la base de datos");
        document.getElementById('cultivoForm').reset();
        loadCultivos(); //recargar tabla
    };
    request.onerror = function(event){
        console.error("Error al añadir cultivo:", event.target.error);
    };
}

//mostrar cultivos existentes
function loadCultivos(){
    let objectStore = db.transaction("cultivos").objectStore("cultivos");
    let tableBody = document.getElementById('cultivoTableBody');
    tableBody.innerHTML = '';

    objectStore.openCursor().onsuccess = function(event){
        let cursor = event.target.result;
        if (cursor){
            let row = tableBody.insertRow();
            row.insertCell(0).textContent = cursor.value.nombre;
            row.insertCell(1).textContent = cursor.value.hectareas;
            row.insertCell(2).textContent = cursor.value.variedad;
            row.insertCell(3).textContent = cursor.value.tipoSiembra;
            row.insertCell(4).textContent = cursor.value.tipoMercado;
            cursor.continue();
        }
    };
}

// Submit del formulario de análisis de suelo
function setupFormSubmission() {
    document.querySelector('.needs-validation').addEventListener('submit', function (event) {
        event.preventDefault();
        if (this.checkValidity()) {
            realizarAnalisis();
        }
        this.classList.add('was-validated');
    });
}

//logica para realizar el analisis del suelo
function realizarAnalisis() {
    //obtener valores de inputs
    const arena = parseFloat(document.getElementById('arena').value)
    const limo = parseFloat(document.getElementById('limo').value)
    const arcilla = parseFloat(document.getElementById('arcilla').value)

    //determinar tipo de suelo
    const tipoSuelo = determinarTipoSuelo(arena, limo, arcilla)
    //evaluacion de fertilidad
    const esFertil = evaluarFertilidad()

    //resultados en pantalla
    mostrarResultados(tipoSuelo, esFertil)
}

//funciones 
function determinarTipoSuelo(arena, limo, arcilla) {
    //logica 
    if (arena >= 70) return "Arenoso"
    if (limo >= 80) return "Limoso"
    if (arcilla >= 40) return "Arcilloso"
    if (arena >= 45 && limo >= 40 && arcilla <= 15) return "Franco arenoso"
    if (limo >= 50 && arcilla >= 27) return "Franco arcilloso limoso";
    return "Franco"
}

function evaluarFertilidad() {
    //logica
    const ph = parseFloat(document.getElementById('ph').value);
    const fosforo = parseFloat(document.getElementById('fosforo').value);
    const potasio = parseFloat(document.getElementById('potasio').value);

    return (ph >= 6.0 && ph <= 7.5) && (fosforo > 20) && (potasio > 0.2);
}

function mostrarResultados(tipoSuelo, esFertil) {
    const modalBody = document.getElementById('resultadoModalBody');
    modalBody.innerHTML = `
    <h4>Resultados del análisis:</h4>
    <p>Tipo de suelo: <strong>${tipoSuelo}</strong></p>
        <p>Fertilidad: <strong>${esFertil ? 'Fértil' : 'No fértil'}</strong></p>
    `;

    //mostrar modal
    const resultadoModal = new bootstrap.Modal(document.getElementById('resultadoModal'));
    resultadoModal.show();
}
