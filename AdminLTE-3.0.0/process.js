function setupValidation() {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
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
                            <input type="text" class="form-control" id="ph" placeholder="pH" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid value.</div>
                        </div>
                        <div class="mb-3">
                            <h5>Textura</h5>
                            <label for="arena" class="form-label">Arena</label>
                            <input type="text" class="form-control" id="arena" placeholder="%" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid percentage.</div>
                        </div>
                        <div class="mb-3">
                            <label for="limo" class="form-label">Limo</label>
                            <input type="text" class="form-control" id="limo" placeholder="%" pattern="^[0-9]+(\\.[0-9]+)?$" required>
                            <div class="invalid-feedback">Type a valid percentage.</div>
                        </div>
                        <div class="mb-3">
                            <label for="arcilla" class="form-label">Arcilla</label>
                            <input type="text" class="form-control" id="arcilla" placeholder="%" pattern="^[0-9]+(\\.[0-9]+)?$" required>
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
    `;

    setupValidation(); // Configurar validación
}

function reg_cultivo() {
    document.getElementById("reg_cultivo").innerHTML = `
         <div class="form-container">
    <h3 class="text-center" style="color: green;">Crea tu cultivo</h3>
    <form class="needs-validation" novalidate>
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
}