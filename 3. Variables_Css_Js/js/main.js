const controles = document.querySelectorAll('.controles input');

function actualizarEstados() {
    const medida = this.dataset.medida || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + medida)
    console.log(medida);
};

controles.forEach(input => input.addEventListener('change', actualizarEstados));
controles.forEach(input => input.addEventListener('mousemove', actualizarEstados));