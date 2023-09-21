//Función para generar un color aleatorio en formato hexadecimal
const generateRandomColor = () =>{
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16); 
    console.log("Color hexadecimal generado: " + color);
    return color;
}


//Función para cambiar el color de fondo de la página
const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
}

 //Agregar un evento al botón para cambiar el color al hacer click
const changeColorBtn = document.getElementById("changeColorBtn"); 