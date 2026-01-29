const viewBtn = document.getElementById('view-project')
const project = document.getElementById('projects')

viewBtn.addEventListener('click', (e)=>{
    if(viewBtn.innerText !== 'scrolling'){
        viewBtn.innerText = 'scrolling'
        project.scrollIntoView({behavior:
        'smooth'  })

        setTimeout(()=>{
            viewBtn.innerText = 'view project';
        }, 1000);
    }
})

