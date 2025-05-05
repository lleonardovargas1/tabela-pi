const estados = document.getElementById("slcEstados");
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(data => {
        estados.innerHTML = '<option value="">Selecione um estado</option>';
        data.forEach(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        });
    });
const cidades = document.getElementById('slcCidades');
estados.addEventListener("change", () => {
    const estadoId = estados.value;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
        .then(res => res.json())
        .then(data => {
            cidades.innerHTML = '<option value="">Selecione uma cidade</option>';
            data.forEach(cidade => {
                cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
            });
        })
});