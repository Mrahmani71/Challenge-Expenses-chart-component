const values = [{ day: "mon", value: "15" },
{ day: "tue", value: "35" },
{ day: "wed", value: "52.36" },
{ day: "thu", value: "31.07" },
{ day: "fri", value: "24" },
{ day: "sat", value: "44" },
{ day: "mon", value: "27" }]

function addChart() {
  const chart = document.querySelector('.content__main')
  values.forEach(val => {
    const item_main = document.createElement("div")
    const item_chart  = document.createElement('div')
    const item_prix = document.createElement('h3')
    item_chart.classList.add("item_chart")
    item_prix.classList.add('item_prix')
    const item_name = document.createElement('p')
  
    item_prix.innerText = `$ ${val.value}`
    item_name.innerText = val.day
    item_main.classList.add('chart_main')
    const height = val.value * 2
    item_chart.style.height = `${height}px`
  
  
    item_main.appendChild(item_prix)
    item_main.appendChild(item_chart)
    item_main.appendChild(item_name)
    
    chart.appendChild(item_main)
  })
}

function maxchild() {
  const items = document.querySelectorAll('.chart_main')
  let max = []
  values.forEach(val => max.push(Number(val.value)))
  const getMax = max.indexOf(Number(Math.max(...max)))
  const item = items[getMax]
  item.classList.add('item_max')
}

addChart()
maxchild()