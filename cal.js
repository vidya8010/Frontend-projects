const calculateForm = document.getElementById('calculate_form');

const calculatemarks = (event)=>{
    let max=400;
    event.preventDefault();//to stop the refreshing of page
    const formdata = new FormData(calculateForm);
    let data = {}
    formdata.forEach((value,key) => {
        data[key]=+value;
    });

    const totalmarks = data.cpp + data.cn + data.dm + data.dsa; //calculate total  marks using input name 
    const percentage = (totalmarks/max)*100;
    const result=document.createElement("p");
        result.className = 'result'//to generate text style
    result.innerHTML = `you have got ${totalmarks} out of ${max} and your percentage is ${percentage}`;//actual marks 
    calculateForm.after(result);
}