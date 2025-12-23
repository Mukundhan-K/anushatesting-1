export const registeredFormControl = [
    {
        name : "userName",
        label : "User Name",
        placeholder : "Enter your Name",
        componentType : "input",
        type : "text",
        // icon : User
    },
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your Mail",
        componentType : "input",
        type : "email",
        // icon : AtSign
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your Password",
        componentType : "input",
        type : "password",
        // icon : Lock
    },
];

export const loginFormControl = [
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your Mail",
        componentType : "input",
        type : "email",
        // icon : AtSign
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your Password",
        componentType : "input",
        type : "password",
        // icon : Lock
    },
];

export const resetFormControl = [
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your Mail",
        componentType : "input",
        type : "email",
        // icon : AtSign
    }
];

export const resetPasswordControl = [
    {
        name : "main",
        label : "Enter Password",
        placeholder : "Enter new password",
        componentType : "input",
        type : "password",
    },
    {
        name : "confirm",
        label : "Re-enter Password",
        placeholder : "Enter Confirm password",
        componentType : "input",
        type : "password",
    }
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter project title",
  },
  {
    label: "Status",
    name: "status",
    componentType: "select",
    options: [
      { id: "", name: "select type" },
      { id: "completed", name: "completed" },
      { id: "under construction", name: "under construction" },
    ],
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter project description",
  },

  {
    label: "Project Type",
    name: "projectType",
    componentType: "select",
    options: [
      { id: "", name: "select type" },
      {id:'Apartment', name: "Apartment"},
      {id:'Building', name: "Building"},
      {id:'Industrial', name: "Industrial"},
      {id:'Office', name: "Office"},
      {id:'Residential', name: "Residential"},
      {id:'Villa', name: "Villa"}
    ],
  },
  {
    label: "Project Area",
    name: "projectArea",
    componentType: "input",
    type: "number",
    placeholder: "Enter Project Area",
  },
  {
    label: "Commencement date",
    name: "commencementDate",
    componentType: "input",
    type: "date",
    placeholder: "Enter Commencement date",
  },
  {
    label: "Price Range",
    name: "priceRange",
    componentType: "input",
    type: "text",
    placeholder: "Enter Price Range",
  },
  {
    label: "Number of Floors",
    name: "numberOfFloors",
    componentType: "input",
    type: "text",
    placeholder: "Enter Number of Floors",
  },
  {
    label: "Special Features",
    name: "specialFeatures",
    componentType: "input",
    type: "text",
    placeholder: "Enter Special Features",
  },
  {
    label: "Amenities",
    name: "amenities",
    componentType: "input",
    type: "text",
    placeholder: "Enter Amenities List  ",
  },

  {
    label: "Features",
    name: "features",
    componentType: "dynamicArray",
  },


  {
    label: "Video",
    name: "video",
    componentType: "input",
    type: "text",
    placeholder: "Enter Video link",
  },

  {
    label: "Map Link",
    name: "mapLink",
    componentType: "input",
    type: "text",
    placeholder: "Enter Map Link",
  },
  {
    label: "Location",
    name: "location",
    componentType: "input",
    type: "text",
    placeholder: "Enter location",
  },
  {
    label: "Address",
    name: "address",
    componentType: "textarea",
    placeholder: "Enter address",
  },

  {
    label: "Key Transport",
    name: "keyTransport",
    componentType: "dynamicArray",
  },

];
