import React from 'react'

const OurProducts = () => {
  const productCategories = [
    {
      title: "Powders & Processed Products",
      products: [
        "Onion Powder",
        "Drumstick Powder", 
        "Spices",
        "Chivda"
      ],
      icon: "🌶️",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Fresh Vegetables",
      products: [
        "Onion",
        "Tomato", 
        "Lemon",
        "Chilli",
        "Potato",
        "Ginger",
        "Garlic",
        "Turmeric"
      ],
      icon: "🥬",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sweeteners & Grains",
      products: [
        "Sugar",
        "Jaggery",
        "Grapes"
      ],
      icon: "🍯",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Textiles & Garments",
      products: [
        "T-shirts",
        "Pants", 
        "Saree"
      ],
      icon: "👕",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Handicrafts & Artisan Products",
      products: [
        "Handicraft Products",
        "Bamboo Products"
      ],
      icon: "🎨",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Natural Products",
      products: [
        "Fruits & Flowers"
      ],
      icon: "🌸",
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="our-products" className="w-full bg-gradient-to-br from-gray-50 to-orange-50 py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Complete Product Range
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We export 19+ premium products across 6 categories, from fresh vegetables to traditional handicrafts
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => {
            // Map images to categories
            const categoryImages = {
              0: "/Powders.jpg", // Powders & Processed Products
              1: "/FreshVegetables.jpg", // Fresh Vegetables
              2: "/Sweeteners.jpg", // Sweeteners & Grains
              3: "/TraditionalTextiles.jpg", // Textiles & Garments
              4: "/traditional-handicrafts.jpg", // Handicrafts & Artisan Products
              5: "/cosmos-flowers.jpg" // Natural Products
            }
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={categoryImages[index]}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Category Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                      {category.icon}
                    </div>
                  </div>
                  
                  {/* Category Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Products List */}
                  <div className="space-y-3 mb-6">
                    {category.products.map((product, productIndex) => (
                      <div 
                        key={productIndex}
                        className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300 group/item"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="font-medium">{product}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Button */}
                  <a 
                    href="#" 
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300 group-hover:translate-x-2"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  {/* Hover Effect Line */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${category.color} mt-4 group-hover:w-full transition-all duration-300`}></div>
                </div>
              </div>
            )
          })}
        </div>

 

      </div>
    </section>
  )
}

export default OurProducts
