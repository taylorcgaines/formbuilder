// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
formData[0].label // this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character

// Looping
// Sample of how to loop over the formData
for(let i=0; i<formData.length; i++){

  // Check your dev tools console for what the items in formData have
  console.log(formData[i])

}


// -------- Your Code Goes Here --------

// let fields = document.querySelector('.fields')
// let userFirstName = document.createElement("input")
// userFirstName.type = (formData[0].type);
// userFirstName.id=("user-first-class")
// fields.appendChild(userFirstName)

for(let i=0; i<formData.length; i++){
  const fields = document.querySelector('.fields')
  if ((formData[i].type === "text") || (formData[i].type === "email") || (formData[i].type === "tel")){
    console.log("I found you!")
    let element = document.createElement("input")
    element.type = (formData[i].type)
    element.label = (formData[i].label)
    element.id = (formData[i].id)
    element.placeholder = (formData[i].label)
    fields.appendChild(element)
  }
  if (formData[i].type === "textarea"){
    let element = document.createElement("textarea")
    element.type = (formData[i].type)
    element.label = (formData[i].label)
    element.id = (formData[i].id)
    element.placeholder = (formData[i].label)
    fields.appendChild(element)
  }
  if (formData[i].type === "select"){
    let element = document.createElement("select")
    element.type = (formData[i].type)
    element.label = (formData[i].label)
    element.id = (formData[i].id)
    element.placeholder = (formData[i].label)
    fields.appendChild(element)
    const selectfield = document.querySelector("select")
    let optionBlank = document.createElement("option")
    optionBlank.label = "Select Language... :)"
    optionBlank.disabled = true
    optionBlank.selected = true
    selectfield.appendChild(optionBlank)
    for (j=0; j < formData[i].options.length; j++){
      let option = document.createElement("option")
      option.label = formData[i].options[j].label
      option.value = formData[i].options[j].value
      selectfield.appendChild(option)
    }
  }

}
