puts "Seeding Data"

Parcel.create([
    {
        user_id: 1,
        weight: 5,
        pickup_location: "Nairobi",
        perishable: true,
        fragility: true,
        expected_time: "",
        delivery_location: "Westlands",
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
])

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
