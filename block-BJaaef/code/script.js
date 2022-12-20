
let allpeople =got.houses.reduce((acc,cv)=>{
    return acc.concat(cv.people)
},[])
console.log(allpeople)
let div =document.querySelector('div')
div.classList.add('flex','wrap','justify-between')
allpeople.forEach((char)=>{
        let divSub_2 = document.createElement('div')
        divSub_2.classList.add('flex-30','boxes')
        let divSub_3 = document.createElement('div')
        divSub_3.classList.add('flex','items-center')
        let images = document.createElement('img');
        images.src=char.image;
        images.classList.add('img')
        let names = document.createElement('h2');
        names.innerText=char.name;
        divSub_3.append(images,names)
        let titles = document.createElement('p');
        titles.innerText=char.description;
        titles.classList.add('center')
        let divSub_4 = document.createElement('div');
        divSub_4.classList.add('box-anchor')
        let anchor = document.createElement('a');
        anchor.innerText='Learn More!';
        anchor.href = char.wikiLink;
        divSub_4.append(anchor)

        divSub_2.append(divSub_3,titles,divSub_4)
   
    div.append(divSub_2)
});