document.getElementById("btnBuscar").addEventListener("click", function(){
    const id = document.getElementById("userId").value;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then(res =>{
        if (!res.ok){
            throw new Error("Usuário não encontrado");
        }
        return res.json();
         })
         .then(usuario => {
            const idade = Math.floor(Math.random() * 40) + 20;
            
            const jsonApiFormat = {
                data: {
                    type: "users",
                    id: usuario.name,
                    attributes: {
                        name: usuario.name,
                        age: idade
                    }
                }
            };
            const nome = jsonApiFormat.data.attributes.name;
            const idadeFinal = jsonApiFormat.data.attributes.age;

            document.getElementById("resultado").textContent = 
                `Usuário ${nome} tem ${idadeFinal} anos.`;
         })
         .catch(() =>{
            document.getElementById("resultado").textContent =
            "Usuário não encontrado.";
         });
});

