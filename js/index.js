const api_user = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos_enJson = await response.json();

    let mytablehtml = ``;
    datos_enJson.forEach(
        
        (user, index) => {

        mytablehtml += `<tr>

        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.name}</td>
        <td class='centered'>${user.username}</td>
        <td class='centered'>${user.email}</td>
        <td class='centered'>${user.website}</td>


        </tr>`;
    }
    
    );

    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    tabla_de_datos.innerHTML = mytablehtml;
};

window.addEventListener("load", function () {
    api_user();
});
