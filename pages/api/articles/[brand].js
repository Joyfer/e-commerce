// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let DB = {
    "articles": [
      {
          'id': 1,
        "name": "Nike Retro 1",
        "brand": "nike",
        "price": 300
      },
      {
        'id': 2,
        "name": "Nike Retro 12",
        "brand": "nike",
        "price": 500
      },
      {
        'id': 3,
        "name": "Adidas Superstar",
        "brand": "adidas",
        "price": 700
      },
      {
        'id': 4,
        "name": "Vans Old Skool",
        "brand": "vans",
        "price": 200
      }
    ]
  }
  
  export default (req, res) => {
    const { brand } = req.query
    let filter = DB.articles.filter((el) => el.brand === brand)
    res.status(200).json(filter)
  }
  