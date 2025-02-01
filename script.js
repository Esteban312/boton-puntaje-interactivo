submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    rateElegido()
})

const rateElegido = ()=>{
    
    let radio = list.querySelectorAll('input[type="radio"]:checked')
    let sectionRate = document.getElementById('selectRateSection')


    sectionRate.innerHTML=` 
    <img src="./images/illustration-thank-you.svg" alt="" class="thankyouimg">
    <p id="selectedRate">You selected ${radio[0].value} out of 5</p>
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</p>`;
    sectionRate.setAttribute('id', 'thankyouprint')

}