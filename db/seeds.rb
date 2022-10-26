puts "Seeding Data"

Parcel.create([
    {
        user_id: 1,
        weight: 5,
        pickup_location: "Nairobi",
        perishable: true,
        fragility: true,
        expected_time: "",
        delivery_location: "Weatlands",
        category_type: "electronic"
    },
    {
        user_id: 2,
        weight: 10,
        pickup_location: "Nairobi",
        perishable: true,
        fragility: false,
        expected_time: "",
        delivery_location: "Nakuru",
        category_type: "clothing"
    }
    # {
    #     user_id: 3,
    #     weight: 40,
    #     pickup_location: "Nairobi",
    #     perishable: false,
    #     fragility: true,
    #     expected_time: "",
    #     delivery_location: "Ruiru",
    #     category_type: "electronic"
    # }
])

User.create([
  {
    first_name: "Amos",
    last_name: "Koech",
    email: "amoskoech@gmail.com",
    phone_number: "254712345678",
    password: "12345678",
    password_confirmation: "12345678"

  }, 
  {
    first_name: "Victor",
    last_name: "Mmullah",
    email: "victormmullah@gmail.com",
    phone_number: "254712345998",
    password: "12345678",
    password_confirmation: "12345678"

  }
])

puts "Finished Seeding Data"