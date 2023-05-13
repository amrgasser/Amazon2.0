const product = JSON.parse(`{
  "name": "My amazing Tshirt 2",
  "description": "This is a Tshirt",
  "category": "tshirt",
  "subcategories":[],
  "price": 20.00,
  "material": "cotton",
  "colors": {
    "red": ["/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg"],
    "green": ["/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg"],
    "blue": ["/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg"]
  },
  "variations": [{
    "color": "red",
    "size": "M",
    "sku": "12930",
    "price": "20.00",
    "stock": "100"
  }]
}`)

export default product