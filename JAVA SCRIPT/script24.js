const formatter = (local,currency,value) =>{
    let formattedValue = new Intl.NumberFormat(local,{
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
}

const taxCalculator = (sum,percentage,local,currency) => {
    let tax = sum *(percentage/100);
    let total = sum +tax;
    console.log(`
         sum before tax : ${formatter(local,currency,sum)}
         tax percenatge : ${percentage}%
         tax : ${formatter(local,currency,tax)}
         total: ${formatter(local,currency,total)}
    `);
    
};
taxCalculator(100,18,"en-IN","INR");
