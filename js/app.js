document.addEventListener('DOMContentLoaded',e=>{
 let tareas = [
   {
     id: 1,
     tarea: 'estudiar php',
     completado: true
   },
   {
    id: 2,
    tarea: 'estudiar mysql',
    completado: true
  },
  {
    id: 3,
    tarea: 'estudiar nodejs',
    completado: true
  },
  {
    id: 4,
    tarea: 'estudiar phyton',
    completado: true
  },
  {
    id: 5,
    tarea: 'estudiar jquery',
    completado: true
  },
 ];

   const formulario = document.querySelector('#formulario');


   console.log(formulario)

   formulario.addEventListener('submit',e=>{
     e.preventDefault();

       const contenidoTarea = e.target.querySelector('.tareas').value;
         
      

           console.log(tareas[tareas.length-1])


             if(tareas[tareas.length-1] === undefined){
                let contador = 0;
              console.log('error.....')

                        let obj = {
                          id: contador+1,
                          tarea: contenidoTarea,
                          completado: true
                        }
                       
                        let  tarea2 = [...tareas,obj];

                        tareas = tarea2;
             
                          
                           
                       imprimirTareas(tareas);

             }else{
              let contadorId =    tareas[tareas.length -1].id;


              let  obj = {
                id: contadorId+1,
                tarea: contenidoTarea,
                completado: true
              }

              let  tarea2 = [...tareas,obj];

              tareas = tarea2;
   
              console.log(tareas)
                 
             imprimirTareas(tareas);





             }

      

        
          
         
       
      
          // console.log(contenidoTarea);
            
           
           
           
            
          //  console.log(tareas);

          
   })


    imprimirTareas(tareas); 

    const lista = document.querySelector('.lista');
    const boton = document.querySelector('.boton');

    // boton.addEventListener('click',e=>{
    //   e.preventDefault();
    //       alertaTareas('añadir','se añadio la tarea');
    // })


    lista.addEventListener('click',e=>{
      e.preventDefault();


      

      if(e.target.id == 'modificar'){
          alertaTareas('editar','editando la tarea');        
      }else if(e.target.id == 'eliminar'){
            alertaTareas('eliminar','eliminando tarea');
            // console.log(e.target.dataset.key);
            // console.log(tareas);

            let filtro = tareas.filter(task=> Number(task.id) !== Number(e.target.dataset.key));

              //  console.log(filtro);
            tareas = filtro;

               imprimirTareas(tareas);
                    }
    })

})



const limpiarHtml = ()=>{
  const ctr_lista  = document.querySelector('.lista');
  while(ctr_lista.firstChild){
     ctr_lista.removeChild(ctr_lista.firstChild);
  }
}


const imprimirTareas = (tareas)=>{
    const ctr_lista  = document.querySelector('.lista');
      
     limpiarHtml();

     tareas.forEach((task)=>{


      // console.log(index)
       const itemTask = document.createElement('div');

       itemTask.classList.add('lista-item','border-bottom','py-3');
         itemTask.innerHTML = `          
         <p class="numeracion-item">${task.id}</p>
         <p class="tareas-item">${task.tarea}</p>
       <div class="controles-item">
           <button class=" rounded-2 me-1" id="modificar" data-key=${task.id}><i class='bx bxs-edit-alt pe-1'></i>modificar</button>
           <button class=" rounded-2 ms-1" id="eliminar" data-key=${task.id}><i class='bx bxs-x-circle pe-1'></i>  eliminar</button>
       </div>
         
         `    
          // console.log(itemTask);

          ctr_lista.appendChild(itemTask);
     })
}

const  alertaTareas = (type,msg)=>{

  const mensaje = document.querySelector('.mensaje');
  const  iconAñadido =  "<i class='bx bxs-check-circle me-1'></i>";
  const iconModificar = "<i class='bx bxs-edit-alt pe-1'>";
  const iconEliminar =  "<i class='bx bxs-x-circle pe-1'></i> ";
   if(type == 'añadir'){

         mensaje.classList.remove('alert-warning');
         mensaje.classList.remove('modificar');
         mensaje.classList.remove('alert-danger');
         mensaje.classList.remove('eliminar');

         mensaje.classList.add('alert-success','tarea-enviada');
         mensaje.innerHTML = `${iconAñadido} <p class="mensaje-info mb-0">${msg}</p>`;
          
         setTimeout(()=>{
              mensaje.classList.remove('tarea-enviada');
         },1100)

   }else if(type == 'editar'){

         mensaje.classList.remove('alert-success');
         mensaje.classList.remove('tarea-enviada');
         mensaje.classList.remove('alert-danger');
         mensaje.classList.remove('eliminar');

        mensaje.classList.add('alert-warning','modificar');
        mensaje.innerHTML = `${iconModificar} <p class="mensaje-info mb-0">${msg}</p>`;
        setTimeout(()=>{
          mensaje.classList.remove('modificar');
        },1100)
   }else if(type == 'eliminar'){

    mensaje.classList.remove('alert-warning');
    mensaje.classList.remove('modificar');
    mensaje.classList.remove('alert-success');
    mensaje.classList.remove('tarea-enviada');

    mensaje.classList.add('alert-danger','eliminar');
    mensaje.innerHTML = `${iconEliminar} <p class="mensaje-info mb-0">${msg}</p>`;
    setTimeout(()=>{
      mensaje.classList.remove('eliminar');
    },1100)
   }
}




///ANGELS








