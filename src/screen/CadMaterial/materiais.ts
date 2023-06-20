let materiais = [
        {
          name: 'Aluminio',
       
        },
        {
          name: 'Cobre',
        },
        {
          name: 'Ferro',
        },
        {
          name: 'Papelão',
        },
        {
          name: 'Plástico',
        },
        {
          name: 'Vidro',
        },
      ]
    
   

interface stateProps{
    content: string,
    setContent: Function,
}
export function state({content,setContent}:stateProps){

    materiais.forEach((value,index,array)=>{


        value['content'] = content
        value['setContent'] = setContent
        array[index] = value

    })

}








export default materiais;