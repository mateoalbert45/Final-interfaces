document.querySelector('#numeroInput').addEventListener('keydown', (e) => {
    e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, '$1 $2')
})
