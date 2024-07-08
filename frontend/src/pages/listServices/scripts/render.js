export function renderServices(services) {
    
    const list = document.getElementById("serviceList")
    list.innerHTML = ""

    if(services.length == 0) {
        list.insertAdjacentHTML(
            "beforeend", 
            `<h3 style="text-align: center">Nenhum serviço encontrado</h3>`
        )
    }

    services.forEach((service, index) => {

        list.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed fs-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-${index}"
                        aria-expanded="false"
                        aria-controls="collapse-${index}"
                    >${service.name}</button>
                </h2>
                <div id="collapse-${index}" class="accordion-collapse collapse" data-bs-parent="#serviceList">
                    <div class="accordion-body d-flex flex-column">
                        <h4>Porvedor do Serviço: ${service.department.name}</h4>
                        <p class="card-text">${service.description}</p>
                        <div class="align-self-end">
                            <span class="material-symbols-outlined edit-icon" data-bs-toggle="modal" data-bs-target="#editService">edit</span>
                            <span class="material-symbols-outlined delete-icon">delete</span>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    })
}